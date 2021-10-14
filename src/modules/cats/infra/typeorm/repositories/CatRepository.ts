import { ICatRepository } from "src/modules/cats/repositories/ICatRepository";
import { EntityManager, EntityRepository, Repository } from "typeorm";
import { Cat } from "../entities/Cat";

@EntityRepository(Cat)
class CatRepository implements ICatRepository {
    private ormRepository: Repository<Cat>

    constructor(manager: EntityManager) {
        this.ormRepository = manager.getRepository(Cat)
    }

    public async find(): Promise<Cat[]> {
        return this.ormRepository.find()
    }

    public async findById(id:string): Promise<Cat> {
        return this.ormRepository.findOne(({
            where:{
                id
            }
        }))
    }
}

export { CatRepository }