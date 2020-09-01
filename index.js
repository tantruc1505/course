const express = require('express');
const app = express();
const path = require('path');
var compression = require('compression');
const {dataKhoaHoc} = require('./const/data');
app.use(compression());

const bodyParser = require('body-parser');
const data = require('./const/data');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));



app.use(express.static(path.join(__dirname,"build"),{ maxage: '365d' }));
// app.use(express.static(path.join(__dirname,"Public","images")))

// app.use(express.static('Public'));
app.set('view engine','ejs');
app.set('views','./build');



app.get('*', function (req, res, next) {
    res.setHeader("Cache-Control", "build, max-age=2592000");
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
  next();
});


app.listen(process.env.PORT || 3500, function(){
    console.log('Server started!');
})


app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});

app.get('/', function(req,res){
    res.render('indexUser');
})

app.get('/login', function(req,res){
    res.render('indexLogin');
})

app.get('/register', function(req,res){
    res.render('indexRegister');
})

app.get('/course', function(req,res){
    res.render('indexCourse');
})

app.post('/createCourse', function(req,res){
    const {id} = req.body
    console.log(id)
    app.get(`/course/${id}`, function(req,res){
        const data = dataKhoaHoc.find( x => x.MaKhoaHoc == val.MaKhoaHoc)
        if(!data){
            return res.send("<p>404 not found!</p>")
        }
        return res.render('indexDetailCourse');
    })
    res.json({ok:'ok'})
})


for(let val of dataKhoaHoc){
    app.get(`/course/${val.MaKhoaHoc}`, function(req,res){
        const data = dataKhoaHoc.find( x => x.MaKhoaHoc == val.MaKhoaHoc)
        if(!data){
            return res.send("<p>404 not found!</p>")
        }
        return res.render('indexDetailCourse');
    })
}

app.get('/user', function(req,res){
    res.render('userDetail');
})

app.get('/admin', function(req,res){
    res.render('indexAdmin');
})