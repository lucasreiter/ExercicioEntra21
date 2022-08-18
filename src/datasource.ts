import { DataSource } from "typeorm"
import { Cart } from "./entity/cart"
import { Client } from "./entity/client"
import { Product } from "./entity/product"
import { Sale } from "./entity/sale"



const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    entities: [Client, Sale, Product, Cart],
    logging: false,
    synchronize: true,
})

export default dataSource 