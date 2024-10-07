import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/edit/:coffeId" element={<EditPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
