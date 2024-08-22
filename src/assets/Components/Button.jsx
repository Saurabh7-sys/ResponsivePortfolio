
const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`cursor-pointer px-4 py-1.5 bg-yellow-600 rounded-full hover:bg-yellow-800 duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
