const fs = require('fs');

const filename = 'data/orders';

module.exports = function(app) {
  app.get('/list', function (req, res) {
    fs.readFile( filename, 'utf8', function (err,data) {
      if (err) {
        console.log('something went wrong ' + err);
      } else {
        res.send(data);
      }
    });
  });

  app.get('/order', function (req, res) {
    console.log(req.query.test);

    var data = req.query.test + ',' + '\n';

    fs.appendFile(filename, data, function (err) {
      if (err) {
        console.log('something went wrong ' + err);
      }
    });

    res.send('written');
  });
}
