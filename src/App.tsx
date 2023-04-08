import { HashRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Header from "./pages/Header";
import Todo from "./pages/Todo";
import ApiPage from "./pages/Apipage";
import UserDetails from "./pages/Apipage/userdetails";

function App() {
  return (
    <div className="container py-3">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/useapi" element={<ApiPage />} />
          <Route path="/useapi/:userId" element={<UserDetails />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
