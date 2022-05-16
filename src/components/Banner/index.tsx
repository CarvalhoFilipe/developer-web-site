import banner from "../../images/banner.jpg";
import { motion } from "framer-motion";
import "./styles.scss";
export function Banner() {
  return (
    <div className="banner">
      <img src={banner} />
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
  );
}
