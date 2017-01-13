let app = require('./app')

let port = process.argv[2] || 8080

app.listen(port)

console.log('HTTP server is listening on port ', port)
