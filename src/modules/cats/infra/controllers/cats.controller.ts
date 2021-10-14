import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { UpdateCatDto } from '../../dto';
import { FindAllUseCase } from '../../useCases/findAll/findAllUseCase';
import { FindByIdUseCase } from '../../useCases/findById/findByIdUseCase';
import { Cat } from '../typeorm/entities/Cat';

@Controller('cats')
export class CatsController {
  constructor(
    private findAllUseCase: FindAllUseCase,
    private findByIdUseCase : FindByIdUseCase
  ) {}

  @Get()
  public async findAll(): Promise<Cat[]> {
    return this.findAllUseCase.execute()
  }

  @Get(':id')
  public async findById(id: string): Promise<Cat> {
    return this.findByIdUseCase.execute(id)
  }
  @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
