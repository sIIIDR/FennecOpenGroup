import { all } from 'redux-saga/effects';

import { watchCoreSaga } from './coreSaga';

export function* rootSaga() {
  yield all([watchCoreSaga()]);
}
