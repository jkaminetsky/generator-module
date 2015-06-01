var path = require('path');
var yo = require('yeoman-generator');

describe('templates', function () {
    it('create files', function (done) {
        yo.test.run(path.join( __dirname, '../../generators/app'))
            .on('end', function () {
                yo.assert.file(['.gitignore', '.jshintrc', '.editorconfig']);
                done();
            });
    });
});
