import { Injectable } from '@nestjs/common';
import { CreateGProyectoDto } from './dto/create-g-proyecto.dto';
import { UpdateGProyectoDto } from './dto/update-g-proyecto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GProyectoService {
  constructor (private prisma: PrismaService){}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createProyecto(createGProyectoDto: CreateGProyectoDto) {
    return 'This action adds a new gProyecto';
  }

  findAll() {
    return this.prisma.gestionC.findMany();
  }

  findOne(id: number) {
    return this.prisma.gestionC.findUnique({where:{id}});
  }

  update(id: number, updateGProyectoDto: UpdateGProyectoDto) {
    return this.prisma.gestionC.update({
      where: {id},
      data: updateGProyectoDto,
    });
  }

  remove(id: number) {
    return this.prisma.gestionC.delete({where: {id}});
  }
}
