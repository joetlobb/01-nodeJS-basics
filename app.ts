import * as http from 'http'; // TS

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);