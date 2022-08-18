import * as express from "express"
import dataSource from "./datasource"

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })



const app = express()
app.use(express.json())

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`executando em http://localhost:${PORT}`);
})