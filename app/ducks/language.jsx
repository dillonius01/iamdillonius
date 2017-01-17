/* -----------------    ACTIONS     ------------------ */
const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE';

/* ------------   ACTION CREATORS     ----------------- */

export const toggleLanguage = () => ({
  type: TOGGLE_LANGUAGE
});

/* -------------       REDUCER     ------------------- */

const reducer = (state = 'English', action) => {
  switch (action.type){
    case TOGGLE_LANGUAGE:
        return (state === 'English') ? 'Mandarin' : 'English';

    default:
        return state;
    }
};


export default reducer;
