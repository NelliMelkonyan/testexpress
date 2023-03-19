const express = require('express')
const app = express()

app.get('/', (req, res) => {
  	console.log(req.headers['cf-connecting-ip'])
	res.send('hello world')
})

app.listen(3000)
