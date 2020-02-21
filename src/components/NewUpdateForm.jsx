import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

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
    <div>
    <form onSubmit={handleNewUpdateFormSubmission}>
    <input
    type='text'
    id='authors'
    placeholder='Author'
    ref={(input) => {_authors = input;}}/>

    <textarea
    id='postContent'
    placeholder='Please enter update text here.'
    ref={(textarea) => {_postContent = textarea;}}/>
    <button type='submit'>Update</button>
    </form>
    </div>
  );
}

NewUpdateForm.propTypes = {
  onNewUpdateCreation: PropTypes.func
};

export default NewUpdateForm;
