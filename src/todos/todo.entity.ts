import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task: string;

    @Column({ default: false })
    checked: boolean;
}