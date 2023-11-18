export interface IBaseComponentProps
  extends React.HTMLProps<IBaseComponentProps> {
  dataTestId: string;
  dataTraceId: string;
}
