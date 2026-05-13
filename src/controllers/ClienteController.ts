import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import { MedicamentoModel } from "../modelsNOSQL/Cliente";

export default class MedicamentoController extends AbstractController{
    //Singleton
    //Atributos de clase
    private static _instance:MedicamentoController;
    //Métodos de clase
    public static get instance():MedicamentoController{
        return this._instance || 
        (this._instance = new this("medicamentos"));
    }
    //Metodo de instancia
    protected initRoutes(): void {
        this.router.get('/listarMedicamentos',
            this.getListarMedicamentos.bind(this));
        this.router.post('/crearMedicamento',
            this.postCrearMedicamento.bind(this));    
    }

    private async getListarMedicamentos(req:Request,res:Response):Promise<void>{
        //SELECT
        try{
            const medicamentos = await MedicamentoModel.find().sort({createdAt:-1});
            res.status(200).json(medicamentos);
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
        
    }
    private async postCrearMedicamento(req:Request,res:Response):Promise<void>{
        //CREATE
        try{
            console.log(req.body);
            await MedicamentoModel.create(req.body);
            res.status(200).json({message:"Registro de medicamento exitoso"});
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
    }

}