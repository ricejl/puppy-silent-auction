import BidController from "./Controllers/BidController.js";

class App {
  bidController = new BidController();
}

window["app"] = new App();
