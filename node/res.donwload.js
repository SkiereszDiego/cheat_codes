app.get('/download', function(req, res){
	const file = `${__dirname}/upload-folder/${fileName}`
	res.download(file)
})