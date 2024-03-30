import "./App.css";
import { Routes, Route } from "react-router-dom";
import DeleteBook from "./Pages/DeleteBook.jsx";
import EditBook from "./Pages/EditBook.jsx";
import ShowBook from "./Pages/ShowBook.jsx";
import CreateBook from "./Pages/CreateBook.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:id" element={<ShowBook />} />
      <Route path="/create" element={<CreateBook />} />
      <Route path="/edit/:id" element={<EditBook />} />
      <Route path="delete/:id" element={<DeleteBook />} />
    </Routes>
  );
}

export default App;
