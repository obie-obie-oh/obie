var fs = require('fs');
var multiParty = require('connect-multiparty'),
    multiPartyMiddleware = multiParty();

var S3FS = require('s3fs')
var s3fsImp1 = new S3FS('obietestbucket123', {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

module.exports = function(app, express) {
  app.use(multiPartyMiddleware)

  app.post('/upload', (req, res) => {
    var files = req.files
    var fileCount = Object.keys(req.files).length
    var fileUploadCount = 0
    for (var file in files) {
      (function(file) {
        var stream = fs.createReadStream(file.path);
        s3fsImp1.writeFile(file.name, stream).then(function() {
          fileUploadCount++;
          if (fileUploadCount === fileCount) {
            res.send('successful uploading').status(200);
          }
        });
      })(files[file])
    }
  })
}