import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  fantasyName: string;

  @IsString()
  @IsNotEmpty()
  reasonSocial: string;

  @IsString()
  @IsNotEmpty()
  cpnj: string;

  @IsString()
  @IsNotEmpty()
  responsibleName: string;

  @IsString()
  @IsNotEmpty()
  fieldOfActivity: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  uf: string;

  @IsString()
  @IsNotEmpty()
  road: string

  @IsString()
  @IsNotEmpty()
  neighborhood: string

  @IsString()
  @IsNotEmpty()
  number: string
}
