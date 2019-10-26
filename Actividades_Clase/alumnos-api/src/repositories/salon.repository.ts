
import {
  DefaultCrudRepository,
  Filter,
  HasManyRepositoryFactory,
  HasOneRepositoryFactory,
  Options,
  repository,
} from '@loopback/repository';
import {
  Salon,
  SalonRelations,
  SalonWithRelations,
  Alumno,
} from '../models';
import { MongoConnDataSource } from '../datasources';
import { Getter, inject } from '@loopback/core';
import { AlumnoRepository } from './alumno.repository'

export class SalonRepository extends DefaultCrudRepository<
  Salon,
  typeof Salon.prototype.id,
  SalonRelations
  > {
  public readonly alumnos: HasManyRepositoryFactory<
    Alumno,
    typeof Salon.prototype.id
  >;

  constructor(
    @inject('datasources.mongo_conn') dataSource: MongoConnDataSource,
    @repository.getter('AlumnoRepository')
    protected alumnoRepositoryGetter: Getter<AlumnoRepository>,
  ) {
    super(Salon, dataSource);
    this.alumnos = this.createHasManyRepositoryFactoryFor(
      'alumnos',
      alumnoRepositoryGetter,
    );
  }
  public findByProfesor(profesor: string) {
    return this.findOne({ where: { profesor } });
  }

  async find(
    filter?: Filter<Salon>,
    options?: Options,
  ): Promise<SalonWithRelations[]> {
    // Prevent juggler for applying "include" filter
    // Juggler is not aware of LB4 relations
    const include = filter && filter.include;
    filter = { ...filter, include: undefined };
    const result = await super.find(filter, options);



    if (include && include.length && include[0].relation === 'alumnos') {
      await Promise.all(
        result.map(async r => {
          r.alumnos = await this.alumnos(r.id).find();
        }),
      );
    }

    return result;
  }

  async findById(
    id: typeof Salon.prototype.id,
    filter?: Filter<Salon>,
    options?: Options,
  ): Promise<SalonWithRelations> {
    // Prevent juggler for applying "include" filter
    // Juggler is not aware of LB4 relations
    const include = filter && filter.include;
    filter = { ...filter, include: undefined };

    const result = await super.findById(id, filter, options);


    if (include && include.length && include[0].relation === 'alumnos') {
      result.alumnos = await this.alumnos(result.id).find();
    }

    return result;
  }

}
