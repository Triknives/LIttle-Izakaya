import React from 'react';
import NewUpdatePrompt from './NewUpdatePrompt';
import NewUpdateForm from './NewUpdateForm';
import PropTypes from 'prop-types';

class HomeUpdateControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewUpdateForm onNewUpdateCreation={this.props.onNewUpdateCreation}/>;
    } else {
      currentlyVisibleContent = <NewUpdatePrompt onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

HomeUpdateControl.propTypes = {
  onNewUpdateCreation: PropTypes.func
};

export default HomeUpdateControl;
