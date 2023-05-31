import React from 'react'
import { Route } from 'react-router-dom'

function ProtectedRoute({component: component, isAuthenticated, ...rest}) {
  return (
    <Route 
        {...rest}
        render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default ProtectedRoute