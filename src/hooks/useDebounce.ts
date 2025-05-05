import { useRef } from "react"

const useDebounce = () => {
  const id = useRef<number>(undefined)

  const debounce = (callback: () => any, ms = 200) => {
    return new Promise(res => {
      clearTimeout(id.current)

      id.current = setTimeout(() => {
        res(callback())

        clearTimeout(id.current)
      }, ms)
    })
  }

  return { debounce }
}

export default useDebounce
