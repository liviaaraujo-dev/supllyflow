import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto, AuthLoginDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) { }

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
          name: dto.name,
          fantasyName: dto.fantasyName,
          cpnj: dto.cpnj,
          fieldOfActivity: dto.fieldOfActivity,
          reasonSocial: dto.reasonSocial,
          responsibleName: dto.reasonSocial,
          city: dto.city,
          neighborhood: dto.neighborhood,
          number: dto.number,
          road: dto.road,
          uf: dto.uf
        },
      });

      return {
        email: dto.email,
        name: dto.name,
        fantasyName: dto.fantasyName,
        cpnj: dto.cpnj,
        fieldOfActivity: dto.fieldOfActivity,
        reasonSocial: dto.reasonSocial,
        responsibleName: dto.reasonSocial,
        city: dto.city,
        neighborhood: dto.neighborhood,
        number: dto.number,
        road: dto.road,
        uf: dto.uf,
        access_token: (await this.signToken(user.id, user.email)).access_token
      };
    } catch (error) {
      if (
        error instanceof
        PrismaClientKnownRequestError
      ) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Credentials taken',
          );
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthLoginDto) {
    const user =
      await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });
    if (!user)
      throw new ForbiddenException(
        'Credentials incorrect',
      );

    const pwMatches = await argon.verify(
      user.hash,
      dto.password,
    );
    if (!pwMatches)
      throw new ForbiddenException(
        'Credentials incorrect',
      );
      return {
        email: user.email,
        name: user.name,
        fantasyName: user.fantasyName,
        cpnj: user.cpnj,
        fieldOfActivity: user.fieldOfActivity,
        reasonSocial: user.reasonSocial,
        responsibleName: user.reasonSocial,
        city: user.city,
        neighborhood: user.neighborhood,
        number: user.number,
        road: user.road,
        uf: user.uf,
        access_token: (await this.signToken(user.id, user.email)).access_token
      };
  }

  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(
      payload,
      {
        expiresIn: '15m',
        secret: secret,
      },
    );

    return {
      access_token: token,
    };
  }
}
