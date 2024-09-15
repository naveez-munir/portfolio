import { motion } from "framer-motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  delay: number;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
