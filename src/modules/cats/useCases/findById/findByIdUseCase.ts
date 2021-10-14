import { Inject, Injectable } from "@nestjs/common";
import { Cat } from "../../infra/typeorm/entities/Cat";
import { ICatRepository } from "../../repositories/ICatRepository";

@Injectable()
class FindByIdUseCase {
    constructor(
        @Inject('CatRepository')
        private catRepository : ICatRepository
    ) {}

    public async execute(id: string): Promise<Cat> {
        return this.catRepository.findById(id)
    }
}

export { FindByIdUseCase }