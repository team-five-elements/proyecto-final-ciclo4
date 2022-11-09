import React from "react";
import { Route, Routes,  } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos/index";


export const Paginas = () => {
  return (
    <section>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/productos" element={<ProductosLista/>} />
        </Routes>
    </section>
  )
}


