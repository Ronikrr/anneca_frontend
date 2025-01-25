import "./App.css";
import './component/header/change.css';
import Navbar from "./component/navbar/navbar";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/constant";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        {ROUTES.map((v) => (
          <Route key={v.path} path={v.path} element={v.component} /> 
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;