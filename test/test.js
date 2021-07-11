
var assert = require("chai").assert;

const r = require("../static/js/check.js");

describe("checking" , function(){
   it("should return 3" , function(){
      assert.equal(r(1, 2) , 3);
   })
});