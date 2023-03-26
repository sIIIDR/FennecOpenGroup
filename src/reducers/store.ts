import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import * as Sentry from '@sentry/react';

import { rootSaga } from '../sagas/rootSaga';
import { IRootState } from '../interfaces/IRootState';
import { coreReducer } from './coreReducer';

const sentryReduxEnhancer = Sentry.createReduxEnhancer({});

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers<IRootState>({
  core: coreReducer,
});

export const store = createStore(
  reducers,
  compose(composeWithDevTools(applyMiddleware(sagaMiddleware)), sentryReduxEnhancer),
);

sagaMiddleware.run(rootSaga);
