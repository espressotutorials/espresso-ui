const {execSync} = require('child_process');

compileMainTheme();

function compileMainTheme() {
    const pathFrom = `../espresso-ui/src`;
    const pathTo = `dist/helpers`;

    execSync(`lessc ${pathFrom}/variables.less ${pathTo}/main-theme.css`);
}
