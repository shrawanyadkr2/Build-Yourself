const express = require('express')
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const expressSession = require('express-session')
const flash = require('connect-flash');

var registerRouter = require('./routes/register.user');
var logoutRouter = require('./routes/logout');
var loginRouter = require('./routes/login');
var forget_passwordRouter = require('./routes/forget.password')
var mainRouter = require('./routes/main')
var profileRouter = require('./routes/profile')
var templatesRouter = require('./routes/templates')
var deleteAccountRouter = require('./routes/delete.account')
var customizeRouter = require('./routes/customize')
var uplaodImageRouter = require('./routes/uplaod.Userimage')
var userEditRouter = require('./routes/user.edit')
var aboutRouter = require('./routes/about')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser());

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "Secret hai"
  }))
app.use(flash())


app.use('/', mainRouter);
app.use('/templates', templatesRouter);
app.use('/profile',profileRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/forget_password', forget_passwordRouter);
app.use('/delete', deleteAccountRouter);
app.use('/customize', customizeRouter);
app.use('/upload', uplaodImageRouter);
app.use('/edit', userEditRouter);
app.use('/about', aboutRouter);




app.listen(3000, ()=>{
    console.log("Sever is running....");
    
})

