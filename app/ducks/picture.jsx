/* -----------------    ACTIONS     ------------------ */
const SET_PICTURE = 'SET_PICTURE';
const CLEAR_PICTURE = 'CLEAR_PICTURE';

/* ------------   ACTION CREATORS     ----------------- */

export const setPicture = picture => ({
  type: SET_PICTURE,
  picture
});

export const clearPicture = () => ({
  type: CLEAR_PICTURE
})

/* -------------       REDUCER     ------------------- */

const reducer = (state = '', action) => {
  switch (action.type){
    case SET_PICTURE:
      return action.picture;

		case CLEAR_PICTURE:
			return '';

    default:
      return state;
    }
};


export default reducer;
