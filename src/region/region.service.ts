import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { regionDto } from './dto/region.dto';
import { Region } from '@prisma/client';
import { UpdateRegionDto } from './dto/update-region.dto';

@Injectable()
export class RegionService {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: regionDto) : Promise<Region>{
        return this.prisma.region.create({ data })
    }
    findAll() : Promise<Region[]> {
        return this.prisma.region.findMany();
    }

    async findOne(id: number): Promise<Region> {
        const region = await  this.prisma.region.findUnique({ where: { id } });
        if(!region){
            throw new NotFoundException("Region Not Found") 
        }
        return region
    }

    async update(id: number, data: UpdateRegionDto) : Promise<Region> {
        await this.findOne(id);
        return this.prisma.region.update({ where: { id }, data });
    }

    async remove(id: number) : Promise<Region> {
        await this.findOne(id);
        return this.prisma.region.delete({ where: { id } });
    }
}
