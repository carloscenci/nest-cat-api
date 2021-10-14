import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({})
export class Cat {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({
        nullable: true,
        type: "character varying",
        name: 'nome'
    })
    nome: string

    @Column({
        nullable: true,
        type: "timestamp with time zone",
        name: 'data'
    })
    data: Date

    @Column({
        nullable: true,
        type: "boolean",
        default : false
    })
    tipo: boolean
}