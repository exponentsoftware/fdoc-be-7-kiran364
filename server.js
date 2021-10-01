const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;


const db = require("./models");
db.sequelize.sync();


const todoRoutes = require("./routes/todo.routes");
const userRoutes = require("./routes/user.routes")
app.use("/todos", todoRoutes);
app.use("/users", userRoutes);


app.listen(PORT, () => {
    console.log(`server is runing on port no -- ${PORT}`);
});