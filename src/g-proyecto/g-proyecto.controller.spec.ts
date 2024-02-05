import { Test, TestingModule } from '@nestjs/testing';
import { GProyectoController } from './g-proyecto.controller';
import { GProyectoService } from './g-proyecto.service';

describe('GProyectoController', () => {
  let controller: GProyectoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GProyectoController],
      providers: [GProyectoService],
    }).compile();

    controller = module.get<GProyectoController>(GProyectoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
