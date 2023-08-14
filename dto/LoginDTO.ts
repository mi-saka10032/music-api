import { Rule, RuleType } from '@midwayjs/validate';
import { ApiProperty } from '@midwayjs/swagger';

/** 密码正则（密码格式应为8-18位数字、字母、符号的任意两种组合） */
export const REGEXP_PWD =
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/;

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
}
