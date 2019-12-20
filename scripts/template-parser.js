const fs = require('fs');
const path = require('path');
const util = require('util');

const includeRe = /\{\%\s+include\s+\'(\w+.+html)\'\s+\%\}/gmi
const staticRe = /\{\%\s+static\s+\'(\w+.+\w+)\'\s+\%\}/gmi
const varNameRe = /\{\{\s+(\w+)\s+\}\}/gmi
const encoding = 'utf-8';
const templatePath = 'template';
const baseTemplate = 'base';
const templateExt = '.html';
const staticRoot = '/static/';
const readFile = util.promisify(fs.readFile);

const realPath = fs.realpathSync(process.cwd());

function pathResolve(p) {
    return path.join(realPath, templatePath, p);
}

function composeTemplate(code) {
    if (includeRe.test(code)) {
        code = code.replace(includeRe, function(c, tname) {
            const tfile = fs.readFileSync(pathResolve(tname), encoding);
            return tfile;
        })
    }
    return code;
}

function composeContext(code, context) {
    Object.keys(context).forEach(key => {
        code = code.replace(varNameRe, function(c, varname) {
            if (varname === key) {
                return context[key];
            }
            return c;
        })
    })
    return code;
}

function composeStatic(code, root) {
    if (staticRe.test(code)) {
        code = code.replace(staticRe, function(c, sname) {
            return path.join(root, sname);
        })
    }
    console.log(code);
    return code;
}

async function parser() {
    const baseCode = await readFile(pathResolve(baseTemplate + templateExt), encoding);
    const composeCode = composeStatic(composeTemplate(baseCode), staticRoot);

    return function (context) {
        return composeContext(composeCode, context);
    }
}

async function d() {
    const d = await parser()
    const e = d({
        body: 'this is body'
    })
}

d();

module.exports = parser