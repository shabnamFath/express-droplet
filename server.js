let express = require('express')
let app = express()
app.get('/foobar', function(req, res) {
	res.send("Hello world!")
})
app.listen(3040, function() { console.log("Server started on port 3040") })

