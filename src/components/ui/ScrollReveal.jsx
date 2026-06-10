import { motion } from 'framer-motion';

const variants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export default function ScrollReveal({ children, delay = 0, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
