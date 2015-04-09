/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var CleanCss = require('clean-css');

module.exports = function(content, file, conf){
    conf.processImport = false;
    return new CleanCss(conf).minify(content).styles;
};
