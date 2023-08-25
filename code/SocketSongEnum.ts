/** 歌曲信息的Socket枚举值 */
export enum SocketSongEnum {
  Start, // 上传完成，解析开始
  BasicAnalysis, // 基础信息解析完成
  OSS, // OSS上传完成
  DetailAnalysis, // 详细信息解析完成
}

export interface SocketSongResponse {
  originalName: string;
  status: SocketSongEnum;
}
