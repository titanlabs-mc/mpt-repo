import { Application, Request, Response } from "express";

export class ApiRoutes {
  private prefix: String = "/api/v1/public";

  public route(app: Application) {

    app.get(`${this.prefix}/data/plugins/:id/metadata`, (req: Request, res: Response) => {
      const id = req.params.id;

    });

    app.get(`${this.prefix}/data/plugins/:id/file`, (req: Request, res: Response) => {

    });
  }
}