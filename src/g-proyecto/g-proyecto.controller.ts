import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GProyectoService } from './g-proyecto.service';
import { CreateGProyectoDto } from './dto/create-g-proyecto.dto';
import { UpdateGProyectoDto } from './dto/update-g-proyecto.dto';

@Controller('g-proyecto')
export class GProyectoController {
  constructor(private readonly gProyectoService: GProyectoService) {}

  @Post()
  create(@Body() createGProyectoDto: CreateGProyectoDto) {
    return this.gProyectoService.createProyecto(createGProyectoDto);
  }

  @Get()
  findAll() {
    return this.gProyectoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gProyectoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGProyectoDto: UpdateGProyectoDto) {
    return this.gProyectoService.update(+id, updateGProyectoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gProyectoService.remove(+id);
  }
}
