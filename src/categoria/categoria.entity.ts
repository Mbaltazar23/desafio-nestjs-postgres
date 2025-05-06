import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categorias')
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
}
