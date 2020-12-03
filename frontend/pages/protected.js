import React, { useContext, useEffect, useState } from 'react'

import AppContext from '../context/AppContext'
import Unauthorized from '../components/Unauthorized'
import { useRouter } from 'next/router'
import { withAuthSync } from '../lib/auth'

function Protected() {
  const router = useRouter()
  const appContext = useContext(AppContext)

  useEffect(() => {
    if (!appContext.isAuthenticated) {
      // return <Unauthorized />
      router.push('/login') // redirect if you're already logged in
    }
  }, [])

  return <div>This Is Protected Routes</div>
}

export default withAuthSync(Protected)
