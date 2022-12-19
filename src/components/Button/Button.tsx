import './style.scss';
import { Bprops } from './types.d';
const Button = ({ variant = 'primary', title, onClick }: Bprops) => {
  return (
    <button
      className={`uibtn-${variant}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
