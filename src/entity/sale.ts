import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Client } from "./client"

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    status: string

    @ManyToOne(() => Client)
    @JoinColumn({name: 'client_id'})
    user: Client

}