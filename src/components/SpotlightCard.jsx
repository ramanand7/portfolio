const handleMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--x', `${e.clientX - rect.left}px`);
  card.style.setProperty('--y', `${e.clientY - rect.top}px`);
};

const SpotlightCard = ({ children, className = '', as = 'div', ...rest }) => {
  const Component = as;
  return (
    <Component onMouseMove={handleMove} className={`card-spotlight ${className}`} {...rest}>
      {children}
    </Component>
  );
};

export default SpotlightCard;
