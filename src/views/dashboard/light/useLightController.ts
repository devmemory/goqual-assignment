import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'
import useDebounce from 'src/hooks/useDebounce'
import { apiManager } from 'src/services/apiManager'

const useLightController = () => {
  const { debounce } = useDebounce()

  const { mutate } = useMutation({
    mutationFn: apiManager.updateDeviceValue,
    onSuccess(e) {
      console.log({ e })
    },
    onError(e) {
      console.log({ e })
    },
  })

  const [value, setValue] = useState<number>(50)

  const onChangeLight = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)

    setValue(newValue)

    debounce(() => mutate(newValue), 200)
  }

  return { value, onChangeLight }
}

export default useLightController
