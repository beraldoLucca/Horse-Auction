const express = require("express");
const app = express();

const porta = 8889;

app.get("/api/status", (req,res)=>{
    return res.status(200).json({
        service: "Bojack Horseman",
        status: "up",
        httpStatus: 200,
    })
})

app.use(horses);


app.listen(porta, ()=>{
    console.log(`servidor rodando na porta ${porta}`);
});