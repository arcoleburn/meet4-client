import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWalking,
  faSubway,
} from '@fortawesome/free-solid-svg-icons';

export const Step = (props) => {
  const { mainStep, type } = props;

  const parseInstructions = (instructions) => {
    return instructions.replace(/<[^>]+>/g, '').replace('Destination ', '. Destination ');
  };

  const renderMainStep = () => {
    return (
      <>
        <h4>
          <FontAwesomeIcon
            icon={type == 'transit' ? faSubway : faWalking}
          />
          {parseInstructions(props.stepData.html_instructions)}
        </h4>
        {type == 'transit' ? (
          <>
            <li>
              Line: {props.stepData.transit_details.line.short_name}
            </li>
            <li>
              Arrive at:{' '}
              {props.stepData.transit_details.arrival_stop.name}
            </li>
          </>
        ) : null}{' '}
      </>
    );
  };
  const renderSubStep = () => {
    return (
      <li>
        {props.stepData.html_instructions
          ? parseInstructions(props.stepData.html_instructions):
          'Transfer to next line'}
      </li>
    );
  };

  return <>{mainStep ? renderMainStep() : renderSubStep()}</>;
};

export const TransitStep = (props) => {
  return <p>transit steps soon</p>;
};
