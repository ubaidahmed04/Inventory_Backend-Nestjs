import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { regionDto } from './dto/region.dto';

@Injectable()
export class RegionService {
    constructor(private readonly prisma: PrismaService) { }

    create(data: regionDto) {
        return this.prisma.region.create({ data })
    }
    findAll() {
        return this.prisma.region.findMany();
    }

    async findOne(id: number) {
        const region = await  this.prisma.region.findUnique({ where: { id } });
        if(!region){
            throw new NotFoundException("Region Not Found") 
        }
        return region
    }

    update(id: number, data: any) {
        return this.prisma.region.update({ where: { id }, data });
    }

    remove(id: number) {
        return this.prisma.region.delete({ where: { id } });
    }
}
