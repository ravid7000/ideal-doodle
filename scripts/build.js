const fs = require('fs');
const path = require('path');
const marked = require('marked');

const dirName = './src';
const buildDir = './build';
const templatePath = './template/base.html';
const sidebarPath = './template/sidebar.html';
const ext = /.md$/

let templateContent;

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
    },
    pedantic: false,
    headerIds: true,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: true
})

function absPath(pathName) {
    return path.resolve(process.cwd(), pathName);
}

function readFile(filePath, cb, filename = '') {
    fs.readFile(filePath, 'utf-8', function(err, content) {
        if (err) {
            errorLogger(err);
            return;
        }
        cb(filename, content);
    })
}

function readFiles(dirname, onFileContent, onError) {
    fs.readdir(absPath(dirname), function(err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        const len = filenames.length;
        filenames.forEach(function(filename, idx) {
            readFile(path.join(dirname, filename), function(fname, content) {
                onFileContent(fname, content, idx, len);
            }, filename);
        });
    });
}

function writeFile(dirname, filename, content, cb) {
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }
    fs.writeFile(path.join(dirname, filename), content, cb);
}

function parseFileContent(filename, content, curr, total) {
    if (!ext.test(filename)) {
        return
    }
    const htmlFile = filename.split(ext)[0].concat('.html');
    content = marked(content);
    const htmlContent = templateContent.replace('{{ body }}', content);
    writeFile(absPath(buildDir), htmlFile, htmlContent, function() {
        logPercent(curr, total);
    });
}

function logPercent(curr, total) {
    const percent = total - ++curr / total * 100;
    console.log(`Complete: ${percent}%`);
    if (percent === 100) {
        console.log('\nDone !!!');
    }
}

function errorLogger(err) {
    throw(err);
}

function build() {
    readFile(absPath(templatePath), function(filename, content) {
        templateContent = content;
        readFiles(dirName, parseFileContent, errorLogger)
    })
}

build();