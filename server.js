import http from 'http';

http.get('http://www.camcaptures.ca', res =>{
   // console.log(res.statusCode);
    res.on('data', chunk => {
        console.log(chunk.toString())
    })
})