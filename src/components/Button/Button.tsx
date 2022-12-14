import './style.scss';
import { Bprops } from './types.d';
const Button = ({ variant = 'primary', onClick }: Bprops) => {
  return (
    <button
      className={`uibtn-${variant}`}
      onClick={onClick}
    >
      Sign in
    </button>
  );
};

export default Button;
