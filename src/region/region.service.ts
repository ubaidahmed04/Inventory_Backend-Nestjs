import { Injectable } from '@nestjs/common';
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

    findOne(id: number) {
        return this.prisma.region.findUnique({ where: { id } });
    }

    update(id: number, data: any) {
        return this.prisma.region.update({ where: { id }, data });
    }

    remove(id: number) {
        return this.prisma.region.delete({ where: { id } });
    }
}
