interface IPersona
{
    nombre: string;
    edad: number;
    direccion:
    {
        calle: string;
        pais: string;
        ciudad: string;
    },
    mostrarDireccion:() => string;
}

const persona: IPersona =
{
    nombre: 'Facundo',
    edad: 22,
    direccion:
    {
        calle: 'Barrio 50 viviendas',
        pais: 'Argentina',
        ciudad: 'Catamarca',
    },
    mostrarDireccion()
    {
        return this.nombre+ ',' +this.direccion.ciudad+ ',' +this.direccion.pais;
    }    
}
console.log(persona.mostrarDireccion());