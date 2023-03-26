import { action } from 'typesafe-actions';

import { CoreActionsEnum } from '../enums/CoreActionsEnum';
import { LangEnum } from '../enums/LangEnum';
import { ModalsEnum } from '../enums/ModalsEnum';

export const coreSetVisibleModal = (value: ModalsEnum) => action(CoreActionsEnum.CORE_SET_VISIBLE_MODAL, { value });
export const coreRemoveVisibleModal = (value: ModalsEnum) =>
  action(CoreActionsEnum.CORE_REMOVE_VISIBLE_MODAL, { value });

export const coreGetLang = () => action(CoreActionsEnum.CORE_GET_LANG);
export const coreSetLang = (lang: LangEnum) => action(CoreActionsEnum.CORE_SET_LANG, { lang });
