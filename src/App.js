import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import MainLayout from "./components/views/MainLayout/MainLayout";
import Projects from "./components/pages/Projects/Projects";
import Travel from "./components/pages/Travel/Travel";
import Justyna from "./components/Articles/Justyna/Justyna";
import Articles from "./components/pages/Articles/Articles";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Travel" element={<Travel />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/justyna" element={<Justyna />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
