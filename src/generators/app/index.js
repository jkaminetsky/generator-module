import { Base } from 'yeoman-generator';
import * as path from 'path';

const EDITORCONFIG = '.editorconfig';
const JSHINTRC = '.jshintrc';
const GITIGNORE = '.gitignore';

export default class ModuleGenerator extends Base {

    constructor(...args) {
        super(...args);

        this.sourceRoot(path.join(__dirname + '/../templates'));

        // Configure Lodash templating so it ignores interpolation markers in
        // ES6 template strings.
        //this._.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;
    }

    configuring() {
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
}
