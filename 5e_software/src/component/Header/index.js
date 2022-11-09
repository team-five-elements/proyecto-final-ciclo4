import React, {useContext} from "react";
import five from "../../component/Imagenes/five.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../../component/context/Dataprovider";



export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito

    const toogleMenu = () =>{
        setMenu(!menu)
    }
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={five} alt="logo" width="100" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
        <li>
          <Link to="/productos">LOGIN</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item_total">{carrito.length}</span>
      </div>
    </header> 
  );
};
