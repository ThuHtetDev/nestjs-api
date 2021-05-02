import { homedir } from "node:os";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    
    @Column('text')
    name: string;

    @Column({unique: true})
    username:string;

    @Column()
    email: string;

    @Column()
    password: string;
}