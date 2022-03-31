import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Book from "./routes/Book"
import User from "./routes/User";
import UserDetails from "./routes/UserDetails";
import BookDetails from "./routes/BookDetails";
import BookStock from "./routes/BookStock";
import BorrowedBook from "./routes/BorrowedBook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/user" element={<User />} />
        <Route path="/borrowed" element={<BorrowedBook />} />
        <Route path="/stock" element={<BookStock />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
