import { useEffect, useRef, useState } from 'react'

interface IUseInterval {
  (
    callback: VoidFunction,
    interval: number,
  ): {
    stopInterval: VoidFunction
    startInterval: VoidFunction
  }
}

export const useInterval: IUseInterval = (callback, interval) => {
  const [isRunning, setIsRunning] = useState(false) // Track if interval should be running
  const savedCallback = useRef<VoidFunction>(undefined)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!isRunning) return // Don't start interval if not running

    function tick() {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }

    const id = setInterval(tick, interval)
    return () => clearInterval(id)
  }, [interval, isRunning])

  // Function to stop the interval
  const stopInterval = () => {
    setIsRunning(false)
  }

  const startInterval = () => {
    setIsRunning(true)
  }

  return { stopInterval, startInterval } // Return the function to stop the interval
}
