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

app.post('/api/login',(req, res)=>{
    //Mock user
    const user = {
        id: 1,
        username: 'Rushank',
        email: 'rushankshah65@gmail.com'
    }
    jwt.sign({
        user: user
    }, 'secretkey', (err, token)=>{
        res.json({
            token: token
        })
    })
})

app.listen(PORT, () => console.log('Server is up and running on port '+PORT))
