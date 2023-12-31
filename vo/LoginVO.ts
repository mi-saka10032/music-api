import { ApiProperty } from '@midwayjs/swagger';
import { BaseVO } from './BaseVO';

/**
 * 登录成功后返回的VO
 */
export class LoginVO {
  @ApiProperty({ description: '用户名' })
  username: string;

  @ApiProperty({ description: '权限信息' })
  roles: Array<string>;

  @ApiProperty({ description: '访问凭证' })
  accessToken: string;

  @ApiProperty({ description: '过期时间' })
  expires: Date;
}

export class UserVO extends BaseVO {
  @ApiProperty({ description: '头像' })
  avatarUrl: string;

  @ApiProperty({ description: '用户名' })
  username: string;

  @ApiProperty({ description: '注册时间' })
  regTime: Date;

  @ApiProperty({ description: '状态 0：不可用，1：正常' })
  status: number;
}

export class Captcha {
  @ApiProperty({ type: String, example: 'midway-VC', description: '验证码id' })
  id: string;

  @ApiProperty({ type: String, example: 'base64', description: 'base64-svg' })
  imageBase64: string;
}
