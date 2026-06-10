import { motion } from 'framer-motion';
import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', href, onClick, download, target, rel, className = '' }) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;

  const motionProps = {
    whileHover: { y: -3, scale: 1.02 },
    whileTap:   { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  };

  if (href) {
    return (
      <motion.a href={href} className={cls} download={download} target={target} rel={rel} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={cls} {...motionProps}>
      {children}
    </motion.button>
  );
}
