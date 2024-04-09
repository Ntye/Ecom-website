// import React from 'react'

import { Outlet } from "react-router-dom"

const ClientInterface = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <Outlet/>
    </h1>
  )
}

export default ClientInterface