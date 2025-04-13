import { motion } from "framer-motion";
import { ReactNode } from "react";
interface AnimatedDivPropsI {
  className?: string;
  children: ReactNode;
}
const AnimatedDiv = ({ children, className = "" }: AnimatedDivPropsI) => {
  return (
    <motion.div
      className={className}
      initial={{ transform: "translateY(-180px)", opacity: 0 }}
      whileInView={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
