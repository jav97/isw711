const express = require('express');
const cors = require('cors');
const {ckeckAuth}=require('./controllers/Session');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
 app.use('/api/session', require('./routes/Session'));
 app.use('/api/register',require('./routes/Register'))
 app.use('/api/users',ckeckAuth, require('./routes/User'));
 app.use('/api/clientes',ckeckAuth,require('./routes/Clientes'));
module.exports = app;