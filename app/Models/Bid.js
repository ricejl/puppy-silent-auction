export default class Bid {
  //TODO to add complexity in the future, create puppy as an object with properties name, img, origin story, and bid array--this will require a new Puppy model
  constructor({ bidAmt, bidder }) {
    //NOTE this will receive an object on construction with the properties bidAmt and bidder
    //new Bid({bidAmt: 23, bidder: 8})
    // this.title = data.title;
    this.bidAmt = bidAmt;
    this.bidder = bidder || "anonymous";
  }

  get Template() {
    return `
            <dt>Bid: $${this.bidAmt}</dt>
            <dd>${this.bidder}</dd>
      `;
  }
}
