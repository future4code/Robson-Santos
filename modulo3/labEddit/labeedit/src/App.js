import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import RouteApp from "./route/RouteApp"

const App = () => {
  return (
    <ChakraProvider>
      <RouteApp/>
    </ChakraProvider>
  )
}

export default App