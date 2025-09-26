import { HashRouter, Route, Routes } from "react-router-dom";
import { EditarPage } from "./Editar/Editar-Tasks";
import { NewPage } from "./New/New-Tasks";
import { HomePage } from "./Home/HomePage";

function App() {  
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/edit/:id" element={ <EditarPage /> }/>
          <Route path="/new" element={ <NewPage /> }/>
          <Route path="*" element={ <p> Not Found </p> }/>
        </Routes>
      </HashRouter>
    </>
  );
}

export { App }
