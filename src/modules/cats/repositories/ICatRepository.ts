import { Cat } from "../infra/typeorm/entities/Cat";

interface ICatRepository {
    find(): Promise<Cat[]>;
    findById(id: string): Promise<Cat>;
}

export {ICatRepository}