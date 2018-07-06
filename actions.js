import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const addComment = function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
};

const removeComment = function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
};
    
const editComment = function editComment(id) {
  return {
    type: EDIT_COMMENT,
    id
  } 
};
    
const thumbUpComment = function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  }
};

const thumbDownComment = function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  }
};
    
const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundEditComment = text => dispatch(editComment(text));
const boundThumbUpComment = () => dispatch(ThumbUpComment());
const boundThumbDownComment = () => dispatch(thumbDownComment()); 