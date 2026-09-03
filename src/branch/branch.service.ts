import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BranchDto } from './dto/branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { Branch } from '@prisma/client';

@Injectable()
export class BranchService {
    constructor(
        private readonly prisma: PrismaService
    ) { }
    async create(data: BranchDto): Promise<Branch> {
        // const existingBranch = await this.prisma.branch.findUnique({
        //     where: { branchName: data.branchName },
        // });
        // if (existingBranch) {
        //     throw new ConflictException('This Branch already exists in this region');
        // }

        return this.prisma.branch.create({ data });
    }
    findAll() {
        return this.prisma.branch.findMany()
    }
    async findOne(id: number): Promise<Branch> {
        const branch = await this.prisma.branch.findUnique({ where: { id } });
        if (!branch) {
            throw new NotFoundException(`Branch  ${id} not found`);
        }
        return branch;
    }
    async updateBranch(id: number, data: UpdateBranchDto): Promise<Branch> {
        await this.findOne(id); // existence check — 404 agar na mile
        return this.prisma.branch.update({ where: { id }, data });
    }

    async remove(id: number): Promise<Branch> {
        await this.findOne(id); // existence check — 404 agar na mile
        return this.prisma.branch.delete({ where: { id } });
    }
}
