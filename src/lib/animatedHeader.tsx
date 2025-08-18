import { motion } from "framer-motion";
import { ReactNode } from "react";
import { MotionStyle } from "framer-motion";

type AnimatedHeaderPropsType = {
  className: string;
  children: ReactNode;
  style?: MotionStyle;
};
const AnimatedHeader = ({
  className = "",
  children,
  style,
}: AnimatedHeaderPropsType) => {
  return (
    <motion.h1
      className={className}
      initial={{ transform: "translateX(-60px)", opacity: 0 }}
      whileInView={{ transform: "translateX(0px)", opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={style}
    >
      {children}
    </motion.h1>
  );
};

export default AnimatedHeader;
