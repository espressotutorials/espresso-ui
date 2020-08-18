const fs = require('fs');
const {execSync} = require('child_process');

const projects = ['espresso-ui'];

projects.forEach(project => {
    const components = fs.readdirSync(`src/${project}`);

    console.log(`\nCompiling "${project}":\n`);

    components.forEach(component => compileComponent(project, component));
});

function compileComponent(project, component) {
    console.log(`\t- ${component}`);

    const buildJsFiles = `ng run elements:build:production --aot --main=projects/elements/src/${project}/${component}/compile.ts`;
    const bundleIntoSingleFile = `cat dist/tmp/runtime-es2015.js dist/tmp/main-es2015.js > dist/tmp/et-${component}.js`;
    const copyBundledComponent = `cp dist/tmp/et-${component}.js dist/lib/`;

    execSync(`${buildJsFiles} && ${bundleIntoSingleFile} && ${copyBundledComponent}`);
}
