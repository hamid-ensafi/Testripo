export interface IType {
  IN_PROGRESS: ITypeItem;
  OPEN: ITypeItem;
  CLOSED: ITypeItem;
}
interface ITypeItem {
  name: string;
  class: string;
}
