import { createStore, applyMiddleware } from 'redux';
const createSagaMiddleware = require('redux-saga').default;
import rootReducer from './reducers';
import rootSaga from './sagas';

console.log('sagaMiddleware:', typeof createSagaMiddleware); 

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { store }; 
