const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {User} = require("./models/User")
const cors = require('cors')
const config = require('./config/key')
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDb connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res)=>{
  res.send('Hello World! Mingyu')
})

app.post('/register', (req, res) => {
  //회원가입 할 때 필요한 정보들을 client에서 가져오면 
  //그것들을 DB에 넣어준다. 
  const user = new User(req.body)
  user.save((err,userInfo) => {
    if(err) res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })   
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
}) 