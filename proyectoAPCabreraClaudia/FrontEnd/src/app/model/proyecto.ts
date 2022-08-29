export class Proyecto {
    id: number;
    nombreP: string;
    descripcionP: string;
    fechaP: string;
    linkP: string;

    constructor(nombreP: string, descripcionP: string, fechaP: string, linkP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fechaP = fechaP;
        this.linkP = linkP;
    }
}
