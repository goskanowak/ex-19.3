import ADD_COMMENT from './actions' ;
import REMOVE_COMMENT from './actions' ;
import EDIT_COMMENT from './actions';
import THUMB_UP_COMMENT from './actions' ;
import THUMB_DOWN_COMMENT from './actions' ;

export function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [{  
            id: action.id,
            text: action.text,
            votes: 0
          }
          , ...state.comments];
          
    case REMOVE_COMMENT:
      return state.comments.filter(comment => comment.id !== action.id) // w metodzie filter przekazujemy callback, który jest wykonywany po każdym el tablicy comments, odsiewa te które nie spełniają warunku tego samego id.
          
    case EDIT_COMMENT:
      return state.comments.filter(comment => {
          if (comment.id === action.id) {
            return Object.assign({}, comment, {
              text: action.text
            });
          } else {
            return comment;
          };
      });
          
    case THUMB_DOWN_COMMENT:
      return state.comments.filter(comment => {
        if (comment.id === action.id) {
          return Object.assign({}, comment, {
            votes: action.votes -1
          });
        } else {
          return comment;
        }
      });
          
    case THUMB_UP_COMMENT: 
      return state.comments.filter(comment => {
        if (comment.id === action.id) {
          return Object.assign({}, comment, {
            votes: action.votes +1
          });
        } else {
          return comment;
        }
      });
};