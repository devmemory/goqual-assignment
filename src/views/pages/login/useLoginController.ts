import { useMutation } from '@tanstack/react-query'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthModel } from 'src/models/AuthModel'
import { routeName } from 'src/routes'
import { apiManager } from 'src/services/apiManager'
import { commonUtil } from 'src/utils/commonUtil'

const useLoginController = () => {
  const [model, setModel] = useState<AuthModel>({
    username: '',
    password: '',
  })
  const [isInValid, setIsInVaild] = useState<{ username: boolean; password: boolean }>({
    username: false,
    password: false,
  })

  const navigate = useNavigate()

  const { mutate, isPending, isError } = useMutation({
    mutationFn: apiManager.login,
    onSuccess() {
      navigate(routeName.dashboard)
    },
    onError(error) {
      console.log({ error })
    },
  })

  const onChangeValue = (value: string, key: keyof AuthModel) => {
    setModel((state) => {
      return { ...state, [key]: value }
    })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (_validate()) {
      mutate(model)
    }
  }

  const _validate = () => {
    let invalid = {
      username: false,
      password: false,
    }

    if (!commonUtil.validateEmail(model.username)) {
      invalid.username = true
    }

    if (model.password.length <= 6) {
      invalid.password = true
    }

    setIsInVaild(invalid)

    return Object.values(invalid).every((invalid) => !invalid)
  }

  return { isInValid, isError, onChangeValue, onSubmit, isPending }
}

export default useLoginController
