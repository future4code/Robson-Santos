import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AdminHomePage from './pages/AdminHomePage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import CreateTripPage from './pages/CreateTripPage'
import HomePage from './pages/HomePage'
import ListTripsPage from './pages/ListTripsPage'
import LoginPage from './pages/LoginPage'
import TripDetailsPage from './pages/TripDetailsPage'
import styled from 'styled-components'
import background from './assets/background.png'

const AreaPrincipal = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: repeat-y;
  height: 100vh;
`

const App = () => {
  return (
    <AreaPrincipal>
      <BrowserRouter>
        <Switch>

          <Route exact path={"/"}>
            <HomePage/>
          </Route>

          <Route exact path={"/admin"}>
            <AdminHomePage/>
          </Route>

          <Route exact path={`/application`}>
            <ApplicationFormPage/>
          </Route>

          <Route exact path={"/create"}>
            <CreateTripPage/>
          </Route>

          <Route exact path={"/list"}>
            <ListTripsPage/>
          </Route>

          <Route exact path={"/login"}>
            <LoginPage/>
          </Route>

          <Route exact path={"/details/:id"}>
            <TripDetailsPage/>
          </Route>

          <Route>
            <div>
              <h1>Página não encontrada</h1>
            </div>
          </Route>

        </Switch>
      </BrowserRouter>
    </AreaPrincipal>
  )
}

export default App