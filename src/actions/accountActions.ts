import { action } from 'typesafe-actions';

import { AccountActionsEnum } from '../enums/AccountActionsEnum';
import { LangEnum } from '../enums/LangEnum';

export const accountChangeLang = (lang: LangEnum) => action(AccountActionsEnum.ACCOUNT_CHANGE_LANG, { lang });
