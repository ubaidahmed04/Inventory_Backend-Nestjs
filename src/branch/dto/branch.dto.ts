import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BranchDto {
  @IsNotEmpty()
  @IsString()
  branchName: string;

  @IsNotEmpty()
  @IsInt()
  regionId: number;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsInt()
  status?: number;
}