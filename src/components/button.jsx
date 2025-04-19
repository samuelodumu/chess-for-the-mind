function Button({ label, onClick, className, style, ...others }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      style={style}
      {...others}>
      {label}
    </button>
  );
}

export default Button;