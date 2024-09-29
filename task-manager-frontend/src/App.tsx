import { Header } from "./components/layout/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { RightAlignedHeader } from "./components/layout/RightAlignedHeader";
import { Home } from "./components/pages/Home";
function App() {
  return (
    <HashRouter>
      <div
        className="flex flex-col h-fit"
        style={{
          height: "100vh",
        }}
      >
        <Header />
        <div
          className="flex flex-1 h-full w-fit"
          style={{
            width: "100%",
          }}
        >
          <RightAlignedHeader />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
