import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchDto } from './dto/branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Controller('branch')
export class BranchController {
    constructor(private branchService: BranchService ){}

    @Post()
    createBranch(@Body() data : BranchDto){
        return this.branchService.create(data)
    }

    @Get()
    getBranch(){
        return this.branchService.findAll()
    }
    @Get(':id')
    getBranchById(@Param('id') id: string ){
        return this.branchService.findOne(Number(id))
    }
    @Patch(':id')
    UpdateBranch(@Param('id') id: string,@Body() data : UpdateBranchDto){
        return this.branchService.updateBranch(Number(id), data)
    }
    @Delete(':id')
    removeBranch(@Param('id') id: string){
        return this.branchService.remove(Number(id))
    }
}
