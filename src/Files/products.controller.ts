import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { CreatePanDto } from "./products/dto/produt.dto";
import { PanService } from "./produc.service";




@Controller('pan')
export class PanControllers {
    constructor(private readonly panServiceRepo: PanService) {}

    @Post()
    create(@Body() panDto: CreatePanDto) {
        return this.panServiceRepo.create(panDto);
    }

    @Get()
    findAll() {
        return this.panServiceRepo.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.panServiceRepo.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.panServiceRepo.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updatePanDto: CreatePanDto,
    ) {
        return this.panServiceRepo.update(id, updatePanDto);
    }
}