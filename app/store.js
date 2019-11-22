import Bid from "./Models/Bid.js";

let _state = {
  // activeValue: new Value({ title: "Value" }),
  // /** @type {Value[]} */
  // values: []

  //NOTE for every instance inside this bucket of bids, do this
  bids: [new Bid({ bidAmt: "500", bidder: "Sally" })]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const store = new Store();
export default store;
