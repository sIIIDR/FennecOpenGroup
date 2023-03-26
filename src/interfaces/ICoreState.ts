import { LangEnum } from '../enums/LangEnum';
import { ModalsEnum } from '../enums/ModalsEnum';

export type ModalsEnumState = {
  [key in ModalsEnum]?: boolean;
};

export interface ICoreState extends ModalsEnumState {
  lang: LangEnum;
}
