import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BranchDto } from './dto/branch.dto';

@Injectable()
export class BranchService {
    constructor(private readonly prisma : PrismaService){}
    create(data : BranchDto){
        return this.prisma.branch.create({data})
    }
    findAll(){
        return this.prisma.branch.findMany()
    }
    findOne(id: number){
        return this.prisma.branch.findUnique({
            where: { id }
        })
    }
    updateBranch(id: number, data : any){
        return this.prisma.branch.update({ where : {id} , data })
    }
    remove(id: number){
        return this.prisma.branch.delete({ where : { id } })
    }
}
