import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVendorDto } from './dto/vendor.dto';

@Injectable()
export class VendorService {
    constructor(private readonly prisma: PrismaService){}
    async create(data : CreateVendorDto){
        return this.prisma.vendor.create({ data })
    }
    async findAll() {
        return this.prisma.vendor.findMany()
    }
    async findOne(id : number){
        return this.prisma.vendor.findUnique({ where: { vendorid : id }})
    }
    async update(data : CreateVendorDto, id : number){
        return this.prisma.vendor.update({where : { vendorid : id  }, data})
    }
    async delete(id: number){
        return this.prisma.vendor.delete({ where : { vendorid : id }})
    }

}
