import express from "express"
import chalk from "chalk"
import morgan from "morgan"
import { connectDB } from "./db/mongoose.connection"
import { globalErrorHandler, NotFoundException } from "./utils/error.exceptions"

export const bootstrap = async()=> {
  const app = express()
  const port = process.env.PORT
  
  await connectDB()

  app.use(express.json())
  app.use(morgan("dev"))
  
  app.get("/", )
  
  app.use(globalErrorHandler)
  app.listen(port, ()=> {
    console.log(chalk.bgGreen(`Server is running on port ${port}`))
  })
}