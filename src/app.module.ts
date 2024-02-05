import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GProyectoModule } from './g-proyecto/g-proyecto.module';

@Module({
  imports: [PrismaModule, GProyectoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
