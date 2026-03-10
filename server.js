const app = require("./src/app")
const connectDb = require("./src/DB/DB")

connectDb();

app.listen("3000", () => {
    console.log("server running on port 3000");
})