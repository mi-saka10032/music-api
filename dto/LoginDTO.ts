import { Rule, RuleType } from '@midwayjs/validate';
import { ApiProperty } from '@midwayjs/swagger';
import { REGEXP_PWD } from '../rule/LoginRule';

/**
 * 登录DTO
 */
export class LoginDTO {
  @ApiProperty({ type: String, example: 'misaka10032', description: '用户名' })
  @Rule(RuleType.string().required().min(5).max(20))
  username: string;

  @ApiProperty({ type: String, example: '123456abc', description: '密码' })
  @Rule(RuleType.string().required().pattern(REGEXP_PWD, '密码格式应为8-18位数字、字母、符号的任意两种组合'))
  password: string;

  @ApiProperty({ type: String, example: 'midway-VC', description: '验证码id' })
  @Rule(RuleType.string().required())
  captchaId: string;

  @ApiProperty({ type: String, example: 'captchaCode', description: '验证码输入' })
  @Rule(RuleType.string().required())
  captchaCode: string;
}
