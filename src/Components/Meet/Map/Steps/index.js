import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWalking,
  faSubway,
} from '@fortawesome/free-solid-svg-icons';

import {MainWrapper, SubWrapper} from './Steps.styles'
export const Step = (props) => {
  const { mainStep, type } = props;

  const parseInstructions = (instructions) => {
    return instructions.replace(/<[^>]+>/g, '').replace('Destination ', '. Destination ');
  };

  const renderMainStep = () => {
    return (<>
      <MainWrapper>
          <FontAwesomeIcon
            icon={type === 'transit' ? faSubway : faWalking}
          /><div className = 'instructions'>
          {parseInstructions(props.stepData.html_instructions)}
          </div>
          <p className='duration'>
          {props.stepData.duration.text}
          </p>
        </MainWrapper>
        {type === 'transit' ? (
          <SubWrapper>
            <li className='tr'>
              Line: {props.stepData.transit_details.line.short_name}
            </li>
            <li className='tr'>
              Arrive at:{' '}
              {props.stepData.transit_details.arrival_stop.name}
            </li>
          </SubWrapper>
        ) : null}{' '}
      </>
    );
  };
  const renderSubStep = () => {
    return (
      <SubWrapper>
        {props.stepData.html_instructions
          ? parseInstructions(props.stepData.html_instructions):
          <li className="tr">Transfer to next line</li> 
          }
      </SubWrapper>
    );
  };

  return <>{mainStep ? renderMainStep() : renderSubStep()}</>;
};

export const TransitStep = (props) => {
  return <p>transit steps soon</p>;
};
