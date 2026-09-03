import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RegionService } from './region.service';
import { regionDto } from './dto/region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';

@Controller('region')
export class RegionController {
    constructor(private readonly regionService: RegionService) {}

    @Post()
    async create(@Body() data: regionDto) {
        return await this.regionService.create(data);
    }

    @Get()
    async findAll() {
        return await this.regionService.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number) {
        return await this.regionService.findOne(id);
    }

    @Patch(':id')
    async updateRegion(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateRegionDto) {
        return await this.regionService.update(id, data);
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteRegion(@Param('id', ParseIntPipe) id: number) {
        await this.regionService.remove(id);
    }
}