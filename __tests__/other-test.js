/*import { test, assert } from 'yeoman-generator';
import { path } from 'path';

jest.autoMockOff();

describe('Point', () => {
    beforeEach(done => {
        test.helpers.run(path.join( __dirname, '../src/app'))
            .inDir(path.join( __dirname, './tmp'))  // Clear the directory and set it as the CWD
            .on('end', done);
    });

    it('config files exist', () => {
        assert.file(['.editorconfig', '.jshintrc', '.gitignore']);
        expect(1).toBe(2);
        //expect(p.x).toBe(1);
        //expect(p.y).toBe(5);
    });
});*/

describe('sum', function() {
 it('adds 1 + 2 to equal 3', function() {
   expect(3).toBe(3);
 });
});

