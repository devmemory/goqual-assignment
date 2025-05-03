import React, { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { routeName } from 'src/routes'
import { apiUtil } from 'src/utils/apiUtil';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = apiUtil.getAccessToken()

    console.log({ token })

    // if (token === undefined) {
    //   navigate(routeName.login)
    // } else {
    //   navigate(routeName.dashboard)
    // }
  }, [])

  return <>{children}</>
}

export default AuthProvider
