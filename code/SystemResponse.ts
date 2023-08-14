export default interface SystemResponse<T = any> {
  code: number;
  msg: string;
  data?: T;
}
