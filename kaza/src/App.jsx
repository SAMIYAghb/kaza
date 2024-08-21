import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import House from './pages/House/House';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
// import { loadData } from './data/data.js'
import BaseLayout from './components/Layout/BaseLayout';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     // loader: loadData, // Charger les données pour cette route
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/House/:id",
//     element: <House />,
//   },
//   {
//     path: "*",
//     element: <Error />,
//   },
// ]);


function App() {

  return (
    // <RouterProvider router={router}/>
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/House/:id" element={<House />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
