import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  middleName: string;
}

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  deviceToken: string;
}

export class RecoverPasswordDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  code: string;
}

export class ResetPasswordDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  code: string;
}

// export class ResetAdminPasswordDto {
//   @IsNotEmpty()
//   @IsString()
//   email: string;

//   @IsNotEmpty()
//   @IsString()
//   password: string;

//   @IsNotEmpty()
//   @IsString()
//   code: string;
// }

export class VerifyEmailDto {
  @IsNotEmpty()
  @IsString()
  code: string;
}

export class CreateUsernameDto {
  @IsNotEmpty()
  @IsString()
  username: string;
}
