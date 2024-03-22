class Forma
{
    nombre: string = '';
    Dibujas()
    {
        console.log('Implementación método dibujar clase base');
    }
}

class Rectangulo extends Forma{
    base: number = 0;
    altura: number = 0;
    Dibujar()
    {
        console.log('Implementación método dibujar clase rectangulo');
    }
}

class Circulo extends Forma
{
    radio: number = 0;
    Dibujar()
    {
        console.log('Implementación método dibujar clase circulo');
    }
}
