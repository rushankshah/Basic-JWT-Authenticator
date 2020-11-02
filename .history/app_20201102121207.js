const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/api',(req, res)=>{
    res.json({
        message: 'Test api'
    })
})

app.post('/api/post', verifyToken, (req, res)=>{
    res.json({
        message: 'Post created'
    })
})

// Verify token
function verifyToken(req, res, next){
    //Get auth header
    const bearerHeader = req.headers['authorization']
    // Check if bearer is undefined
    if(typeof(bearerHeader) !== undefined){
        // Split at the space
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    } else{
        //Forbidden
        res.sendStatus(403)
    }
}

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
