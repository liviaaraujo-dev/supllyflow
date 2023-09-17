import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthDto } from '../dto';

export const GetUser = createParamDecorator(
  (
    data: string | undefined,
    ctx: ExecutionContext,
  ) => {
    const request: { user:  AuthDto} = ctx.switchToHttp().getRequest();
    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
