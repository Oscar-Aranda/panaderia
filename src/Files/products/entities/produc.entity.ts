import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from '@nestjs/common';




@Entity()
export class Pan {
    @PrimaryGeneratedColumn('uuid')
    id:string ;

    @Column({ type: 'text' })
    nombre: string;
    
    @Column({ type: 'numeric' })
    precio: number;
    
    @Column({ type: 'varchar'})
    tipo : string;
    
    @Column({ type: 'varchar'})
    descripcion:string;
    
    @Column({ type: 'varchar'})
    categoria:string;
    
    @Column({ type: 'varchar'})
    sabor:string;

    @Column({ type: 'varchar'})
    distribuidor:string;

}