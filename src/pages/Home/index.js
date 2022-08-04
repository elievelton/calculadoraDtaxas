import styles from "../Home/home.module.css";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
// import Box from "@mui/material/Box";

function Home() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/static/maquinas.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <div className="container">
      <div className="banner_slide">
        <h2>Banner slide aqui</h2>
      </div>
      <div className="card">
        <h2>Calculadora de taxas</h2>

      </div>

      <div className="logo">
        <h2>Principais ofertas</h2>
      </div>
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, nome, price, oldPrice, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={nome} />
              </div>
              <div className="info">
                <span className="nome">{nome}</span>
                <span className="oldPrice">R$ {oldPrice}</span>
                <div className="bt-centro">
                  <NavLink to="/ofertas" end>
                    <button className="bt">R$ {price}</button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img
            src="/static/images/216151_right_chevron_icon.png"
            alt="Scroll Left"
          />
        </button>
        <button onClick={handleRightClick}>
          <img
            src="/static/images/216151_right_chevron_icon.png"
            alt="Scroll Right"
          />
        </button>
      </div>
    </div>
  );
}
export default Home;
