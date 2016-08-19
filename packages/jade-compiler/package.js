Package.describe({
  name: "spectrum:jade-compiler",
  version: "0.5.6",
  summary: "Improved Jade(/w unicode support) compiler for Meteor",
  git: "https://github.com/acidsound/meteor-jade.git",
  documentation: "README.md"
});

Npm.depends({
 jade: "https://github.com/acidsound/jade/tarball/f7bafc8430f0a975170a835187c0259af00d68c3"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use([
    'underscore',
    'htmljs',
    'html-tools',
    'blaze-tools',
    'spacebars-compiler'
  ]);
  api.use('minifiers', ['server'], { weak: true });
  api.addFiles([
    'lib/lexer.js',
    'lib/parser.js',
    'lib/transpilers.js',
    'lib/exports.js'
  ]);
  api.export('JadeCompiler');
});

Package.onTest(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use("tinytest");
  api.use("minifiers");
  api.use("spectrum:jade-compiler@0.5.6", "server");
  api.addFiles(["tests/tests.js"], "server");
});
