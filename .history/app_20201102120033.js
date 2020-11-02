const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/api',(req, res)=>{
    res.json({
        message: 'Test api'
    })
})

app.post('/api/post', (req, res)=>{
    res.json({
        message: 'Post created'
    })
})

app.listen(PORT, () => console.log('Server is up and running on port '+PORT))
