import React from "react"
import { Route, Redirect } from "react-router-dom"
import friendView from '../../../pages/mainBoard/View/friendView'

function AuthRoute({loginYn}) {
  return  loginYn ? <Route component={friendView} /> : <Redirect to={'/login'} />
}

export default AuthRoute