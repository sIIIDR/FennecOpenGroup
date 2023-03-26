import { put, takeEvery } from 'redux-saga/effects';

import { CoreActionsEnum } from '../enums/CoreActionsEnum';
import { coreSetLang } from '../actions/coreActions';
import { LangEnum } from '../enums/LangEnum';

export function* watchCoreSaga() {
  yield takeEvery(CoreActionsEnum.CORE_GET_LANG, coreGetLangSaga);
}

export function* coreGetLangSaga() {
  try {
    let lang = /^ru\b/.test(window.navigator.language) ? LangEnum.RU : LangEnum.EN;
    const storageLang = localStorage.getItem('lang');
    if (storageLang) {
      lang = storageLang.toUpperCase() as LangEnum;
    }
    yield put(coreSetLang(lang));
  } catch {
    //
  } finally {
    //
  }
}
