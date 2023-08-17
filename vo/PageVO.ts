import { ApiProperty, Type } from '@midwayjs/swagger';

/**
 * PageVO以function形式书写，是为了方便Swagger取巧识别泛型并添加备注
 */
export function PageVO<T extends Type>(list: T): any {
  class WrapperPageVO {
    @ApiProperty({ type: [list], description: '列表' })
    list: Array<T>;

    @ApiProperty({ type: Number, example: 0, description: '总数' })
    total: number;
  }

  return WrapperPageVO;
}

/**
 * 正规class形式的PageVO，方便前端Pick类型
 * 不含ApiProperty 不适用Swagger
 */
export class PageVOClass<T> {
  list: Array<T>;

  total: number;
}
