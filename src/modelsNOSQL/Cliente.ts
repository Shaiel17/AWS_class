import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        collection:'medicamentos',
        timestamps:false
    }
})

export class Medicamento {
    @prop({required:true, trim:true})
    public sustancia_activa!: string;

    @prop({required:true, trim:true})
    public laboratorio!: string;

    @prop({required:true})
    public requiere_receta!: boolean;
}

export const MedicamentoModel = getModelForClass(Medicamento);