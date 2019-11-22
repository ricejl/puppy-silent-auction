import BidService from "../Services/BidService.js";
import _store from "../store.js";

//Private
function _drawBid() {
  let template = "";
  let bids = _store.State.bids;
  bids.forEach(bid => {
    template += bid.Template;
  });
  //FIXME do i need a forEach method here to iterate through templates???
  document.getElementById("bids").innerHTML = template;
}

//Public
export default class BidController {
  constructor() {
    // console.log("hello from bid controller");
    _drawBid();
    // _store.subscribe("values", _draw);
  }
}
