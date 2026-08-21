import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RegionService } from './region.service';

@Controller('region')
export class RegionController {
    constructor(private regionService: RegionService) { }

    @Post()
    create(@Body() data: any) {
        return this.regionService.create(data)
    }

    @Get()
    findAll() {
        return this.regionService.findAll()
    }
    @Get(':id')
    findById(@Param('id') id : string){
        return this.regionService.findOne(Number(id))
    }
    @Patch(':id')
    updateRegion(@Param('id') id : string, @Body() data : any  ){
        return this.regionService.update(Number(id), data )
    }
    @Delete(':id')
    deleteRegion(@Param('id') id : string ) {
        return this.regionService.remove(Number(id))
    }
}
