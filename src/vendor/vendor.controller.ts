import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { VendorService } from './vendor.service';

@Controller('vendor')
export class VendorController {
    constructor (private vendorService: VendorService) {}
    @Post()
    create(@Body() data : any){
        return this.vendorService.create(data)
    }
    @Get()
    findAll(){
        return this.vendorService.findAll()
    }
    @Get(':id')
    findById(@Param('id') id : string){
        return this.vendorService.findOne(Number(id))
    }
    @Patch(':id')
    Update(@Param('id') id : string , @Body() data : any){
        return this.vendorService.update( data, Number(id))
    }
    @Delete(':id')
    delete(@Param('id') id : string ){
        return this.vendorService.delete(Number(id))
    }

}
