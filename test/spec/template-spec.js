var path = require('path');
var helpers = require('yeoman-generator').test;

describe('templates', function () {
    it('create files', function () {
        helpers.run(path.join( __dirname, '../../generators/app'))
            .inDir(path.join( __dirname, './tmp'))  // Clear the directory and set it as the CWD
            .on('end', function () {
                console.log('end');
                expect(1).toEqual(1);
            });
    });
});

describe('sanity', function () {
    it('should be there', function () {
        expect(0).toEqual(1);
    });
});
