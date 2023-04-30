import { HashRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Header from "./pages/Header";
import Todo from "./pages/Todo";
import ApiPage from "./pages/Apipage";
import UserDetails from "./pages/Apipage/userdetails";
import Adoptez from "./pages/Adoptez";
import Home from "./pages/Home";
import CategoryDetailsPage from "./pages/Adoptez/CategoryDetails";

function App() {
  return (
    <div className="container py-3">
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/useapi" element={<ApiPage />} />
          <Route path="/useapi/:userId" element={<UserDetails />} />
          <Route path="/adoptez" element={<Adoptez />} />
          <Route path="/category-details" element={<CategoryDetailsPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
