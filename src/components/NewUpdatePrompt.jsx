import React from 'react';
import PropTypes from 'prop-types';

var updatesStyling = {
  width: '40%',
  flexWrap: 'wrap',
  justifyContent:'center',
  textAlign: 'center',
  margin:'0 auto',
}

function NewUpdatePrompt(props){
  return (
    <div style = {updatesStyling}>
    <p className ='update-prompt'>Have a new update for the site to post?</p>
    <p className = 'prompt-warning'>This is an ADMIN only feature!</p>
    <button className = 'prompt-button'onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

NewUpdatePrompt.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default NewUpdatePrompt;
