import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import myLogger from './middleware/MyLogger';

const store = createStore(rootReducer, applyMiddleware(myLogger));
export default store;