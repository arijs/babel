
var reSourceRoot = /^umd\/imports-get-module-id\//;

module.exports = {
  "plugins": [
    "external-helpers",
    [
      "transform-modules-umd",
      {
        "globals": {
          "foo-bar": "fooBAR",
          "fizzbuzz": "fizz.buzz",
          "custom-module-id/input": "customModuleId.input",
          "./mylib/foo-bar": "customModuleId.mylib.fooBar",
        },
        "exactGlobals": true
      }
    ]
  ],
  moduleIds: true,
  getModuleId(name) {
    if (reSourceRoot.test(name)) {
      return 'custom-module-id/'+name.replace(reSourceRoot, '');
    }
  }
};
