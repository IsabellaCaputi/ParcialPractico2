export class Paciente {
    id:number;
    nombre:string;
    edad: number;
    diagnostico: string;
    constructor(
        id:number,
        nombre:string,
        edad: number,
        diagnostico: string,
     ) 
       {
           this.id = id;
           this.nombre = nombre;
           this.edad=edad;
           this.diagnostico = diagnostico;
       }
}