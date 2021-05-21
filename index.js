var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8011, () => {
  console.log('Start the server using the port 8011');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  //server가 client쪽으로 보내는 이벤트
  socket.emit('hello', {hello: 'world'});
  //client 에서 보내는 이벤트를 처리
  socket.on('first', function (data){
    console.log(data);
  });
});