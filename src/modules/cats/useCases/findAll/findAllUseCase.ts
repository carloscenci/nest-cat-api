import { Inject, Injectable } from "@nestjs/common";
import { Cat } from "../../infra/typeorm/entities/Cat";
import { ICatRepository } from "../../repositories/ICatRepository";

@Injectable()
class FindAllUseCase {
    constructor(
        @Inject('CatRepository')
        private catRepository : ICatRepository
    ) {}

    public async execute(): Promise<Cat[]> {
        return this.catRepository.find()
    }
}

export { FindAllUseCase }