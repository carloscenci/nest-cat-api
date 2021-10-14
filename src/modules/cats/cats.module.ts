import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './infra/controllers/cats.controller';
import { Cat } from './infra/typeorm/entities/Cat';
import { CatRepository } from './infra/typeorm/repositories/CatRepository';
import { FindAllUseCase } from './useCases/findAll/findAllUseCase';
import { FindByIdUseCase } from './useCases/findById/findByIdUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])] ,
  controllers: [CatsController],
  providers: [
    FindAllUseCase,
    FindByIdUseCase,
    {
      provide: 'CatRepository',
      inject: [
        CatRepository
      ],
      useClass: CatRepository
    }
  ]
})
export class CatsModule {}
 