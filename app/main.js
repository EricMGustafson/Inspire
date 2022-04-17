import { ToDosController } from "./Controllers/ToDosController.js";
import { MainsController } from "./Controllers/MainsController.js";
import { WeathersController } from "./Controllers/WeathersController.js";


class App {
  toDosController = new ToDosController()
  
  mainsController = new MainsController()

  weathersController = new WeathersController()
}

window["app"] = new App();
