export class Balance {
    nombre: string;
    estado: boolean;
    cantidad: number;
    id: string;
    tipos :string;
    dinero :number;
    constructor (nombre: string, estado: boolean,cantidad: number,id:string,tipos:string,dinero:number)
    {
        this.nombre=nombre;
        this.estado=estado;
        this.cantidad=cantidad;
        this.id=id;
        this.tipos=tipos;
        this.dinero=dinero
    }
}

export class Balance2 {
    nombre: string;
    estado: boolean;
    constructor (nombre: string, estado: boolean)
    {
        this.nombre=nombre;
        this.estado=estado;
    }
}