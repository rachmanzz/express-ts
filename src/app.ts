import express from "express";

export const app = express()
app.get("/", (_, s) => {
    s.send("helo")
})