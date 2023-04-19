const express = require('express');
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())

const db = require("./db")

app.post("/api/register", async (req, res) => {
    const { name, dob, year_of_joining, year_of_experience, address, qualification } = req.body

    try {
        const { id } = req.params
        const result = await db.query("INSERT INTO employee (name,dob,year_of_joining,year_of_experience,address,qualification) VALUES (?,?,?,?,?,?)", [name, dob, year_of_joining, year_of_experience, address, qualification])
        res.json(result[0].insertId);
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})

app.get("/api/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await db.query("SELECT * FROM employee WHERE id = ?", [id])
        res.json(result[0]);
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})

app.listen(8080, () => console.log("SERVER IS RUNNING ON PORT 8080"))