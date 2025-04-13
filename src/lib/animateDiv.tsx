import { motion } from "framer-motion";
const AnimatedDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ transform: "translateY(-180px)", opacity: 0 }}
      whileInView={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
