import './style.scss';
import { Bprops } from './types.d';
const Button = ({ variant = 'primary' }: Bprops) => {
  return <button className={`uibtn-${variant}`}>Sign in</button>;
};

export default Button;
