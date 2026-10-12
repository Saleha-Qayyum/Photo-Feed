require("dotenv").config()
const app = require("./src/app")
const connectDB = require("./src/db/db")
 
connectDB()


app.listen(3000, ()=>{
    // if (err) return console.log (err)
    console.log("Server Created")
})

