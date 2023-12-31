import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import ToDoList from './client/components/ToDoList.tsx'
import App from './client/components/App.tsx'
import HomePage from './client/components/HomePage.tsx'
import StepCounter from './client/components/StepCounter.tsx'
import Budget from './client/components/Budget.tsx'

import PresentCycle from './client/components/PresentCycle.tsx'
import Dashboard from './client/components/Dashboard.tsx'
import Weather from './client/components/Weather.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<HomePage />} />

    <Route path="/todolist/:userID" element={<ToDoList />} />
    <Route path="/stepCounter/:userID" element={<StepCounter />} />

    <Route path="/budget/:userID" element={<Budget />} />

    <Route path="/dashboard/:userID" element={<Dashboard />} />
    <Route path="/gift" element={<PresentCycle />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
