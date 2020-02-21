import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';



var formStyling = {
  display:'flex',
  width: '100%',
  flexWrap: 'wrap',
  justifyContent:'center',
  textAlign: 'center',
  padding: '1vh',
}

function NewUpdateForm(props) {
  let _authors = null;
  let _postContent = null;


  function handleNewUpdateFormSubmission(event) {
    event.preventDefault();
    props.onNewUpdateCreation({authors: _authors.value, postContent: _postContent.value, id: v4()});
    _authors.value = '';
    _postContent.value = '';
  }

  return (
    <div style = {formStyling}>
    <form onSubmit={handleNewUpdateFormSubmission}>
    <input
    type='text'
    id='authors'
    placeholder='Author'
    ref={(input) => {_authors = input;}}/>
    <br/>

    <textarea
    id='postContent'
    placeholder='Please enter update text here.'
    ref={(textarea) => {_postContent = textarea;}}/>
    <br/>
    <button type='submit'>Update</button>
    </form>
    </div>
  );
}

NewUpdateForm.propTypes = {
  onNewUpdateCreation: PropTypes.func
};

export default NewUpdateForm;
