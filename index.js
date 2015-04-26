password="defaultpassword";
if(process.argv[2]){
	password=process.argv[2];
}
var http = require("http")
var express = require("express");
app = express();
server = http.createServer(app);
app.use(express.static(__dirname + '/presentation/'));
server.listen(3000);
app.get("/", function(req, res) {
	res.sendfile('presentation/index.html');
});

io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	process.soc=socket;
	console.log("a user is connected!")
	socket.on('message', function(data) {
		socket.broadcast.emit('message', data);
		console.log(data);
	});
	socket.on('pan',function(data){
		socket.broadcast.emit('pan',data);
		console.log(data);
	});
	socket.on('zoom',function(data){
		socket.broadcast.emit('zoom',data);
		console.log(data);
	});
	socket.on('click',function(data){
		socket.broadcast.emit('click',data);
		console.log(data);
	});
});

