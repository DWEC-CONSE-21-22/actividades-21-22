# A2.4 Tablero buscaminas

Vamos a programar una aplicación web que calcule un tablero del juego del buscaminas.

Al iniciar la página, aparece un tablero de 4x4 casillas, todo a 0, indicando 0 minas, con dos botones, uno de calcular tablero y otro de borrar tablero

El usuario puede poner minas en casillas, las minas se marcan con un "-1", cuando acabe clica el botón de calcular tablero.

![Captura2](https://user-images.githubusercontent.com/70903768/116427052-f6b0f700-a843-11eb-9e34-80386d1a783c.PNG)

El programa responde indicando en cada casilla el número de minas que hay en casillas adyacentes.

![Captura3](https://user-images.githubusercontent.com/70903768/116427092-ffa1c880-a843-11eb-829b-7cf32fd7be46.PNG)

Si hay 1 mina, el texto será azul, si hay 2 magenta, si hay 3 morado y si hay 4 o mas rojo.

Si se pulsa el botón de borro tablero, se vuelve a la situación inicial.

AYUDA: Para cambiar el color se puede utilizar:

```javascript
document.getElementById(IDENTIFICADOR_INPUT).style.color="COLOR";

```
AYUDA 2 Funcion para contar minas:

```javascript
// Funcion que dado un tablero y una posicion, indica cuantas minas hay alrededor
function cuantasMinas(x,y){
    var minasEnc=0; //minas encontradas
    if(x>0){
        if(tablero[x-1][y]==-1){
            minasEnc++;
        }
    }
    if(x<tablero.length-1){
        if(tablero[x+1][y]==-1){
            minasEnc++;
        }
    }
    if(y>0){
        if(tablero[x][y-1]==-1){
            minasEnc++;
        }
    }
    if(y<tablero[x].length-1){
        if(tablero[x][y+1]==-1){
            minasEnc++;
        }
    }
    if(y>0 && x>0){
        if(tablero[x-1][y-1]==-1){
            minasEnc++;
        }
    }
    if(y>0 && x<tablero.length-1){
        if(tablero[x+1][y-1]==-1){
            minasEnc++;
        }
    }
    if(x>0 && y<tablero[x].length-1){
        if(tablero[x-1][y+1]==-1){
            minasEnc++;
        }
    }
    if(x<tablero.length-1 && y<tablero[x].length-1){
        if(tablero[x+1][y+1]==-1){
            minasEnc++;
        }
    }    
    //Devolvemos el resultado
    return minasEnc;
}
```
