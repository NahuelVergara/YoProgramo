class Turbina
{
    private numTurbinas: number = 0;
    public constructor(n: number)
    {
        this.numTurbinas = n;
    }

    public ToString()
    {
        return this.numTurbinas + 'Turbinas/s';
    }
}

class Cubierta
{
    private cabinaTripulacion: boolean = false;
    private cabinaVuelo: boolean = false;
    private sistemaEmergencia: boolean = false;    
    private numPuertasSalidas: number = 0;

    public constructor(pCabinaTripulacion: boolean,pCabinaVuelo: boolean, pSistemaEmergencia: boolean, pTanquesCombustible: number, pPuertasSalida: number)
    {
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numPuertasSalidas = pPuertasSalida;
    }

    public ToString()
    {

        let mensaje = 'Cubierta compuesta de: ';
        if(this.cabinaVuelo)
        {
            mensaje += 'Cubierta de Vuelo, ';        
        }

        if(this.cabinaTripulacion)
        {
            mensaje += 'Cubierta de Tripulacion, ';
        }

        if(this.sistemaEmergencia)
        {
            mensaje += 'Sistema de Emergencia, ';
        }

        mensaje += this.numPuertasSalidas + 'Puertas de salida.'
        return mensaje;
    }
}

class Aeroplano
{
    private helice: Helice;
    private trenAterrizaje: TrenDeAterrizaje;
    private alas: Alas;
    private cubierta: Cubierta;

    constructor(pHelice: Helice, pTrenAterrizaje: TrenDeAterrizaje, pAlas: AllowSharedBufferSource, pCubierta: Cubierta)
    {
        this.helice = pHelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }

    public ToString()
    {
        let mensaje = 'Aeroplano compuesto por: ';
        mensaje += this.helice.ToString();
        mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();
        return mensaje;
    }
}