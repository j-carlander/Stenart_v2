import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
