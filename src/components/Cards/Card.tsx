import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  delay: number;
  x?: number;
}

export function Card({ title, children, delay, x = 200 }: CardProps) {
  const cardVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1.5 },
      delay,
    },
    hidden: { opacity: 0, scale: 0, x: x },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  const scroll = () => {
    if (inView && window.scrollY) {
      control.start("visible");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      initial="hidden"
      animate={control}
    >
      {children}
      <span>{title} </span>
    </motion.div>
  );
}
