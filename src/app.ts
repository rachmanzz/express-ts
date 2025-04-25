import express from "express";

export const app = express()
app.get("/", (r, s) => {
    s.send("helo")
})