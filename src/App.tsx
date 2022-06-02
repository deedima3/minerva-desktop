import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Book from "./routes/Book"
import User from "./routes/User";
import UserDetails from "./routes/UserDetails";
import BookDetails from "./routes/BookDetails";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Login from "./routes/Login";
import Forget from "./routes/Forget";
import BookStock from "./routes/BookStock";
import BorrowedBook from "./routes/BorrowedBook";
import Admin from "./routes/Admin";

const App = () => {

  const [user, setUser, removeUser] = useLocalStorage("user", null);

  useEffect(() => {
    if (user) {
      console.log(user)
    }
  }, [user])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} key={user}/>
        <Route path="/forget" element={ <Forget/> }/>
        <Route path="/book" element={<Book />} />
        <Route path="/user" element={<User />} />
        <Route path="/borrowed" element={<BorrowedBook />} />
        <Route path="/stock" element={<BookStock />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
