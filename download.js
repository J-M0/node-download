var http = require('http'),
	Stream = require('stream').Transform,
	fs = require('fs');

var url = 'http://httpbin.org/image/png';
var data = new Stream();
var bufs;
// function pushData(data, chunk) {
// 	data.push(chunk)
// 	console.log(data)
// 	//console.log(chunk)
// }
// var getData = function() {
// 	return data;
// }
http.request(url, function(response) {

	response.on('data', function (chunk) {
		data.push(chunk)
	});

	response.on('end', function() {
	    // fs.writeFileSync('image.png', data.read());
		bufs = data.buffer;
	});
}).end();

// var options = {
// 	hostname: 'httpbin.org',
// 	port: 80,
// 	path: '/post',
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'image/png',
// 		// 'Content-Length': Buffer.byteLength(data)
// 	}
// };
//
// var response = http.request(options, (response) => {
// 	console.log('STATUS: ' + response.statuscode);
// 	console.log('HEADERS: ' + JSON.stringify(response.headers));
// 	// response.setEncoding('utf8');
// 	response.on('data', (chunk) => {
// 		console.log('BODY: ' + chunk);
// 	});
// 	response.on('end', () => {
// 		console.log('No more data in response.')
// 	})
// });
//
// response.on('error', (e) => {
// 	return e;
// });
//
// // var buf = [];
// // data.on('data', function(d){buf.push(d)});
// response.write(data.buffer);
// res.end();

console.log(bufs);
