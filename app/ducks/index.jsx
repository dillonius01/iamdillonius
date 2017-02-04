import { combineReducers } from 'redux';
import language from './language';
import picture from './picture';

const rootReducer = combineReducers({
  language,
  picture
});

export default rootReducer;
