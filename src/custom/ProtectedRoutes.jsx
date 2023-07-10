import React, { useContext } from 'react'
import { Route, Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthenticationContext'

function ProtectedRoutes() {

  const {currentUser} = useContext(AuthContext)

  return (
    currentUser ? <Outlet /> : <Navigate to='/login'/>
  )
}

export default ProtectedRoutes