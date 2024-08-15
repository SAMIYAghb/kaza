import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import House from './pages/House/House';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/House/:id",
    element: <House />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
