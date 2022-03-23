import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesData } from "./interfaces/route.interface";
import { routesData } from "./data/RoutesData"
import Home from "./routes/Home";
import Book from "./routes/Book"
import User from "./routes/User";
import UserDetails from "./routes/UserDetails"
import BookDetails from "./routes/BookDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesData.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
