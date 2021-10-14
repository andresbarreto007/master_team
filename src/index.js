const express = require('express');
const  morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database')

const app = express();


//Seccion de Configuracon

app.set('port', process.env.PORT || 4000);

//Seccion de Middlewares

app.use(morgan('dev'));
app.use(express.json());

//Rutas

app.use('/api/', require('./routes/sales.routes'));

//Archivos Estaticos

app.use(express.static(path.join(__dirname, 'public')));


//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}` );
});