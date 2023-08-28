import { ApiProperty } from '@midwayjs/swagger';

export class OSSSTSTokenVO {
  @ApiProperty({ type: 'string' })
  accessKeyId: string;

  @ApiProperty({ type: 'string' })
  accessKeySecret: string;

  @ApiProperty({ type: 'string' })
  stsToken: string;

  @ApiProperty({ type: 'string' })
  region: string;

  @ApiProperty({ type: 'string' })
  bucket: string;
}
