import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BranchService } from './branch.service';

@Controller('branch')
export class BranchController {
    constructor(private branchService: BranchService ){}

    @Post()
    createBranch(@Body() data : any){
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
    UpdateBranch(@Param('id') id: string,@Body() data : any){
        return this.branchService.updateBranch(Number(id), data)
    }
    @Delete(':id')
    removeBranch(@Param('id') id: string){
        console.log("Branch Id Update time ",id)

        return this.branchService.remove(Number(id))
    }
}
