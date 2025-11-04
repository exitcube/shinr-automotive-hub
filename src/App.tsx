import { Routes, Route } from "react-router-dom";
import Layout from "./components/ui/layout";
import Home from "./pages/home";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
