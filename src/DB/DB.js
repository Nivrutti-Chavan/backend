const mongoose = require("mongoose");


async function connectDb() {
    await mongoose.connect("mongodb+srv://backend:MZbGCpYZijJZqr66@backend.k16f8zy.mongodb.net/GUNJAN")
    console.log("connected to db");
}

module.exports = connectDb;