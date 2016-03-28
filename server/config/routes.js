const fs = require('fs');
const multiParty = require('connect-multiparty'),
    multiPartyMiddleware = multiParty();

const S3FS = require('s3fs')
const s3fsImp1 = new S3FS(process.env.BUCKET_NAME, {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

module.exports = (app, express) => {
  app.use(multiPartyMiddleware)

  app.post('/upload', (req, res) => {
    const files = req.files;
    const fileCount = Object.keys(req.files).length;
    var fileUploadCount = 0;
    const fileLinks = [];
    for (var file in files) {
      ((file) => {
        const stream = fs.createReadStream(file.path);
        const uri = 'https://s3.amazonaws.com/' + process.env.BUCKET_NAME + '/' + encodeURI(file.originalFilename);
        s3fsImp1.writeFile(file.name, stream).then(() => {
          fileUploadCount++;
          fileLinks.push(uri);
          fs.unlink(file.path, (err) => {
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