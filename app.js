// sudah bisa bikin API pake 2 ini aja
const fs = require('fs');
const http = require('http');
const axios = require('axios');

//selanjutnya pake framework (express/Hapi)
//bikin API dengan cek request
const server = http.createServer(async(request, response) => {
    // console.log(request); 
    const {url} = request;
    if (url === '/users'){
        //File system yang sudah disediakan node.js
        // fs.mkdir('newFolder', () => {
            // try{

            // }catch(error){
            //     console.log("error catch", error);
            // }
            // atau 
            //if (error){
            //console.log(error);
            // }
        // });
        //atau pake async await

        // pake axios
        try{
          const baseUrl = 'https://randomuser.me/api';
          const { data } = await axios.get(baseUrl);
          console.log(data.results[0].name.first);
        //   response.write(`Hello ${data.results[0].name.first}`);
        //   response.write(`Hello ${results[0].name.first}`);

        response.end();

        }catch(error){
            console.log("error", error);

        }
        
    }else{
        response.write('Hello World');
        response.end();
    }
    
});

const hostname = 'localhost';
const port = '8080';

server.listen(port, hostname, () => {
    console.log(`listening on ${hostname}:${port}`);
});

// console.log(http);