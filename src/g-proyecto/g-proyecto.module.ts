import { Module } from '@nestjs/common';
import { GProyectoService } from './g-proyecto.service';
import { GProyectoController } from './g-proyecto.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GProyectoController],
  providers: [GProyectoService],
  imports: [PrismaModule],
})
export class GProyectoModule {}
