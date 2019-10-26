import { Entity, model, property } from '@loopback/repository';
import { hasMany } from '@loopback/repository';
import { Alumno, AlumnoWithRelations } from './alumno.model';

@model({ settings: {} })
export class Salon extends Entity {
  @property({
    type: 'number',
  })
  id: number;
  @property({
    type: 'string',
    id: true,
    required: true
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  profesor?: string;

  @hasMany(() => Alumno)
  alumnos?: Alumno[];

  constructor(data?: Partial<Salon>) {
    super(data);
  }
}

export interface SalonRelations {
  alumnos?: AlumnoWithRelations[];
}

export type SalonWithRelations = Salon & SalonRelations;
