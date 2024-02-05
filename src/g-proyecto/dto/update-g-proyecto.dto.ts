import { PartialType } from '@nestjs/swagger';
import { CreateGProyectoDto } from './create-g-proyecto.dto';

export class UpdateGProyectoDto extends PartialType(CreateGProyectoDto) {}
