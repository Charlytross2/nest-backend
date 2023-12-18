import { IsEmail, MinLength } from 'class-validator';

export class RegisterDto {
  first_name: string;
  last_name: string;

  @MinLength(5)
  username: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}
