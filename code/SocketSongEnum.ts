/** 歌曲信息的Socket枚举值 */
export enum SocketSongEnum {
  Start,
  BasicAnalysis,
  OSS,
  DetailAnalysis
}

export interface SocketSongResponse {
  originalName: string;
  status: SocketSongEnum;
}

export const SocketSongText = {
  0: "上传完成，解析开始",
  1: "基础信息解析完成",
  2: "OSS上传完成",
  3: "详细信息解析完成"
};
