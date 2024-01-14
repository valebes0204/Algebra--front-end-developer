const { src, dest } = require("gulp");
const minifyJs = require("gulp-uglify");
const minifyCss = require("gulp-clean-css");

const bundleJs = () => {
  return src("./dist/script.js").pipe(minifyJs()).pipe(dest("./dist/min"));
};

const bundleCss = () => {
  return src("./dist/main.css").pipe(minifyCss()).pipe(dest("./dist/min"));
};

const devWatch = () => {
  watch("./dist/script.js", bundleJs);
  watch("./dist/main.css", bundleCss);
};

exports.bundleJs = bundleJs;
exports.bundleCss = bundleCss;
exports.devWatch = devWatch;
