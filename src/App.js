import React from "react";
import {
  Route,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TicTacToe from "./pages/TicTacToe";
import NotFound from "./pages/NotFound";
//Components
import MainLayout from "./layouts/MainLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <>
            <MainLayout />
            <ScrollRestoration />
          </>
        }
      >
        <Route path="/" index element={<Home />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
