import { combineReducers } from 'redux';
import appsigninreducer from './appsigninreducer';

const combinedreducer = combineReducers({

    appsigninreducer : appsigninreducer
});

export default combinedreducer;