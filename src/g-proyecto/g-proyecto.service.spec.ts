import { Test, TestingModule } from '@nestjs/testing';
import { GProyectoService } from './g-proyecto.service';

describe('GProyectoService', () => {
  let service: GProyectoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GProyectoService],
    }).compile();

    service = module.get<GProyectoService>(GProyectoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
