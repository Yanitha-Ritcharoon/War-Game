
var expect = chai.expect()
var expect = chai.expect;
describe("Deck", function () {
    it("should have 52 cards", function () {
        let deck = new Deck();
        expect(deck.cards.length).to.equal(52);
    });
});

