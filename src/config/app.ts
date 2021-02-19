import { ApiRoutes } from './../routes/v1/public/api_routes';
import { Application } from "express";
import express from "express";

class App {
  public app: Application;
  private api_routes: ApiRoutes = new ApiRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.api_routes.route(this.app);
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }))
  }
}

export default new App().app;