import { HashRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Header from "./pages/Header";

function App() {
  return (
    <div className="container py-3">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
