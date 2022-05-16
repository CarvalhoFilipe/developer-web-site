import { Header } from "./components/Header";
import { Router } from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer /> {/*Teste de commit!*/}
    </BrowserRouter>
  );
}

export default App;
