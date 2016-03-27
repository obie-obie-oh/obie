var fs = require('fs');
var multiParty = require('connect-multiparty'),
    multiPartyMiddleware = multiParty();

var S3FS = require('s3fs')
var s3fsImp1 = new S3FS(process.env.BUCKET_NAME, {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

module.exports = function(app, express) {
  app.use(multiPartyMiddleware)

  app.post('/upload', (req, res) => {
    console.log('req.files ', req.files)
    var files = req.files;
    var fileCount = Object.keys(req.files).length;
    var fileUploadCount = 0;
    var fileLinks = [];
    for (var file in files) {
      (function(file) {
        var stream = fs.createReadStream(file.path);
        console.log('file info: ', file);
        var uri = 'https://s3.amazonaws.com/' + process.env.BUCKET_NAME + '/' + encodeURI(file.originalFilename);
        s3fsImp1.writeFile(file.name, stream).then(function() {
          fileUploadCount++;
          fileLinks.push(uri);
          https://s3.amazonaws.com/obietestbucket123/Screen+Shot+2016-02-08+at+11.24.30+AM.png
          fs.unlink(file.path, function(err) {
            if (err) {
              console.error(err);
              res.send(400);
            }
          });
          if (fileUploadCount === fileCount) {
            res.json(fileLinks).status(200);
          }
        });
      })(files[file])
    }
  })
}