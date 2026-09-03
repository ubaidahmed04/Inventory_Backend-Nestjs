// dto/update-branch.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { regionDto } from './region.dto';

export class UpdateRegionDto extends PartialType(regionDto) {}