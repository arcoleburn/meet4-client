import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBeer,
  faMugHot,
  faPizzaSlice,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

import './index.css';
const Logo = (props) => {
  return (
    <div className="logoContainer">
      <div className="topRow">
        <div className="topSpacer"></div>
        <FontAwesomeIcon className='icon' icon={faPizzaSlice} transform="rotate-135" size='5x'/>
        <div className="topSpacer"></div>
      </div>
      <div className="bottomRow">
        <div className="bottomSpacer"></div>
        <FontAwesomeIcon className='icon' icon={faCoffee} flip="horizontal"
              style={{ marginRight: '0px', }} size='5x'/>
        <FontAwesomeIcon className='icon' icon={faBeer}
                    style={{ marginLeft: '2px',}} size='5x'/>
        <div className="bottomSpacer"></div>
      </div>
    </div>
  );
};

export default Logo;
