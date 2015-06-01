var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    configuring: function () {
        this.sourceRoot(__dirname + '/../templates');

        this.fs.copyTpl(
            this.templatePath('.editorconfig'),
            this.destinationPath('.editorconfig'),
            { title: 'writing ${EDITORCONFIG}' }
        );
    }
});

/*import { Base } from 'yeoman-generator';

const EDITORCONFIG = '.editorconfig';
const JSHINTRC = '.jshintrc';
const GITIGNORE = '.gitignore';

export default class ModuleGenerator extends Base {

    constructor(...args) {
        super(...args);

        // Configure Lodash templating so it ignores interpolation markers in
        // ES6 template strings.
        //this._.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;
    }

    get configuring() {
        this.fs.copyTpl(
          this.templatePath(EDITORCONFIG),
          this.destinationPath(EDITORCONFIG),
          { title: 'writing ${EDITORCONFIG}' }
        );

        this.fs.copyTpl(
          this.templatePath(JSHINTRC),
          this.destinationPath(JSHINTRC),
          { title: 'writing ${JSHINTRC}' }
        );

        this.fs.copyTpl(
          this.templatePath(GITIGNORE),
          this.destinationPath(GITIGNORE),
          { title: 'writing ${GITIGNORE}' }
        );
    }
}*/
