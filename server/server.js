const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:"http://192.168.0.4:3000"}));
require('./config/mongoose.config');
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));