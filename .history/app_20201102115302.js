const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.get('/api',(req, res)=>{
    res.json({
        message: 'Test api'
    })
})
