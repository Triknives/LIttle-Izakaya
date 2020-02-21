import React from 'react';
import PropTypes from 'prop-types';

function NewUpdatePrompt(props){
  return (
    <div>
      <p>Create a new Site Update?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

NewUpdatePrompt.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default NewUpdatePrompt;
