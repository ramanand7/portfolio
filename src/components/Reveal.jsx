import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const Reveal = ({ children, delay = 0, className = '', as = 'div', once = true, y }) => {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={y !== undefined ? { hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0 } } : variants}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
};

export const RevealGroup = ({ children, className = '', stagger = 0.08 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    transition={{ staggerChildren: stagger }}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({ children, className = '', y = 24 }) => (
  <motion.div
    className={className}
    variants={{ hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
  >
    {children}
  </motion.div>
);

export default Reveal;
