import './Button.css';

const Button = ({ text, type, onClick }) => {
  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
