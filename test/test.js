var expect = require('chai').expect;
var titleize = require("../titleize.js");
var assert = require('assert');

describe("titleize", function() {
    // it("should have more than 3 letters", function(){
    //     expect(titleize("Cook")).to.have.length.above(3);
    // });

    // it("should make sure the entry is a string", function() {
    //     expect(titleize("Housekeeper")).to.be.a('string');
    // });

    // it("should change first and last names to uppercase", function() {
    //     expect(titleize("amazon.com")).to.contain(".com");
    // });

    it("should uppercase titles and names", function () {
        expect(titleize("mr matt stringham")).to.equal("Mr. Matt Stringham");
    });
});