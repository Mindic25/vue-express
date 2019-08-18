Create Directory and run npm init

[] mkdir <project Name>
[] cd <project Name>
[] npm init -y

Add Dependencies to Project

[] Add Express to create the API
[] Add morgan to log http requesrs to the console
[] Add cors to allow the client to talk to the front-end
[] Add body-parser to allow the back-end to read the data sent frome the front-end
[] npm install express morgan cors body-parser

Add an index.js file

[] Add an index.js file to the project as the entry point into the application
[] \$touch index.js

Test Out Our Server

[] Add the code below to the index.js file
[] const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
  
 app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
  
 app.get('/', (req, res) => {
res.json({
message: 'Behold The MEVN Stack!'
});
});
  
 const port = process.env.PORT || 4000;
app.listen(port, () => {
console.log(`listening on ${port}`);
});
[] Run project on node index.js

Create Client New Project
[] if you haven't downloaded MDB Vue package yet, go to Getting Started page and download it now
[] Unzip downloaded package and open Your unpacked directory
[] Install the dependencies. To install Vue CLI package npm install -g @vue/cli or yarn global add @vue/cli
[] Create Vue client
[] Navigate to client directory cd client
[] Add MDB vue add mdb , choose app, existing app or Demo template from the list
[] Launch your app npm start or yarn start
