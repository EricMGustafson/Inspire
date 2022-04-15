import { ToDosController } from "./Controllers/ToDosController.js";
import { MainsController } from "./Controllers/MainsController.js";


class App {
  toDosController = new ToDosController()
  
  mainsController = new MainsController()
}

window["app"] = new App();
