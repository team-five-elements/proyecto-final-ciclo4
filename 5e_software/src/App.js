import React from 'react';
import { Header } from "./component/Header";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./component/Paginas";
import { DataProvider } from "./component/context/Dataprovider";
import { Carrito } from "./component/Carrito";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Paginas />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
