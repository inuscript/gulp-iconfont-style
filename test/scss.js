var assert = require("assert")
var sassMap = require("../src/sass/map")

describe("scss", function(){
  describe("map", function(){
    it("should set fontname", function(){
      assert.equal(sassMap({foo: "baz"}, "valueName" ), "$valueName: (\n  foo: baz\n)")
    })
  })
})