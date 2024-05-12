import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import Request from './pages/Request'



const App = () => {
  const addRequest = (newRequest) => {
    console.log(newRequest)
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/Request' element={<Request addRequest={addRequest} />} />
    </Route> 
    )
  )

  return <RouterProvider router={router} />
}

export default App