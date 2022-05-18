import { motion } from "framer-motion";
import { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./styles.scss";

const images = ["banner.jpg", "banner2.jpg", "banner3.jpg"];

export function Banner() {
  const [aux, setAux] = useState(0);

  const nextBanner = () => (aux === 2 ? setAux(0) : setAux((aux) => aux + 1));
  const previousBanner = () =>
    aux === 0 ? setAux(2) : setAux((aux) => aux - 1);

  return (
    <>
      <div className="banner">
        <img src={require(`../../images/${images[aux]}`)} alt="banner" />
        <motion.div
          animate={{
            x: [-1000, 10],
          }}
          transition={{ ease: "easeIn", duration: 2.5 }}
        >
          <h2>
            <span>
              Developer<strong>. </strong>
            </span>
            é uma plataforma para divulgar desenvolvedores.
          </h2>
        </motion.div>
      </div>
      <div className="content-button">
        <button onClick={nextBanner}>
          <GrFormPrevious />
        </button>
        <button onClick={previousBanner}>
          <GrFormNext />
        </button>
      </div>
    </>
  );
}
