import { Request, Response } from "express";
import AbstractController from "./AbstractController";

export default class NombreController extends AbstractController {
    // Singleton
    // Atributos de clase
    private static _instance: NombreController;
    // Métodos de clase
    public static get instance(): NombreController {
        return this._instance ||
        (this._instance = new this("Proyecto"));
    }
    // Método de instancia
    protected initRoutes(): void {
        this.router.get('/minombre',
            this.getMiNombre.bind(this));
    }

    private async getMiNombre(req:Request,res:Response):Promise<void>{
        console.log("Acceso a la ruta /minombre");
        res.status(200).json({mensaje:'Gerson Shaiel Hernández Sánchez'});
    }
}