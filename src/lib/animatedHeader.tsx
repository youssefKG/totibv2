import { motion } from "framer-motion";
const AnimatedHeader = ({ className = "", children }) => {
  return (
    <motion.h1
      className={className}
      initial={{ transform: "translateX(-60px)", opacity: 0 }}
      whileInView={{ transform: "translateX(0px)", opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.h1>
  );
};

export default AnimatedHeader;
