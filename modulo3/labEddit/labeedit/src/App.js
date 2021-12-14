import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Feed from './pages/Feed'
import Post from './pages/Post'
import Error from './pages/Error'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path={'/'}>
            <HomePage/>
          </Route>

          <Route exact path={'/login'}>
            <Login/>
          </Route>

          <Route exact path={'/register'}>
            <CreateAccount/>
          </Route>

          <Route exact path={'/feed'}>
            <Feed/>
          </Route>

          <Route exact path={'/post'}>
            <Post/>
          </Route>

          <Route>
            <Error/>
          </Route>

        </Switch>      
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App