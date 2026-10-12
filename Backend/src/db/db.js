require("dns").setServers(["8.8.8.8"]) 
const mongoose = require("mongoose")

       async function connectDB() {
            await mongoose.connect(process.env.MONOGODB_URI)
            console.log("DB Connected")
        }

        module.exports= connectDB