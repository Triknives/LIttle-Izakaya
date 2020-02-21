import React from 'react';
import PropTypes from 'prop-types';

var updatesStyling = {
  width: '60%',
  flexWrap: 'wrap',
  justifyContent:'center',
  textAlign: 'center',
  padding: '1vh',
  margin:'0 auto',
}

function NewUpdatePrompt(props){
  return (
    <div style = {updatesStyling}>
    <p>Create a new Site Update?</p>
    <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

NewUpdatePrompt.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default NewUpdatePrompt;
