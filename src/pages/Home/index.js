import styles from "../Home/home.module.css";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { setAnalyticsCollectionEnabled } from "firebase/analytics";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

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
    <>
      <div className={styles.boxbanner}>
        <div className={styles.banner}>
          <AwesomeSlider className={styles.slider} animation="cubeAnimation">
            <div data-src="https://loucosporgeek.com.br/wp-content/uploads/2022/08/1200x630-maquina-cartoes.jpg" />
            <div data-src="https://loucosporgeek.com.br/wp-content/uploads/2022/08/capa-1-1280x720-1.jpg" />
            <div data-src="https://loucosporgeek.com.br/wp-content/uploads/2022/08/rede-pos-cielo-movel-banda-feat-br-1000x542-4.jpg" />
          </AwesomeSlider>
        </div>
      </div>
      <div className="container">
        <div className={styles.titulocalculadora}>
          <h2>Calculadora de taxa</h2>
        </div>
        <div className={styles.calculadora}>
          <div className={styles.boxcalculadora}>
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="logo">
          <h2>Principais ofertas</h2>
        </div>
        <center>
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
        </center>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img src="/static/images/image-1.png" alt="Scroll Left" />
          </button>
          <button onClick={handleRightClick}>
            <img src="/static/images/image-1.png" alt="Scroll Right" />
          </button>
        </div>
      </div>
    </>
  );
}
export default Home;
