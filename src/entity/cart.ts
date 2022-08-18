import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Product } from "./product"
import { Sale } from "./sale"

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantity: number

    @Column()
    price: string

    @ManyToOne(() => Sale)
    @JoinColumn({name: 'sale_id'})
    sale: Sale

    @ManyToOne(() => Product)
    @JoinColumn({name: 'product_id'})
    product: Product

}