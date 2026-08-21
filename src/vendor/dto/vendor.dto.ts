import { IsString, IsEmail, IsInt, IsOptional, MaxLength } from 'class-validator';

export class CreateVendorDto {
  @IsString()
  @MaxLength(150)
  company: string;

  @IsString()
  @MaxLength(100)
  contact: string;

  @IsString()
  @MaxLength(20)
  phone: string;

  @IsEmail()
  @MaxLength(150)
  email: string;

  @IsString()
  @MaxLength(255)
  address: string;

  @IsOptional()
  @IsInt()
  status?: number;
}