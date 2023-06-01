let menu;
let drink;
let snack;

//Funciones para el menu (bebidas, snacks y propina)//
function showMenu() {
    return prompt('¿Qué deseas el día de hoy?\n\n1. Tragos\n2. Piqueos\n3. Propina (para la mesera)\n\n0. Salir');
}

function drinklist() {
    return prompt('¿Qué bebida deseas hoy?\n\n1. Pisco Sour\n2. Whisky\n3. Fernet\n\n0. Salir');
}

function snacklist() {
    return prompt('¿Qué piqueo deseas hoy?\n\n1. Salchipapa\n2. Alitas BBQ\n3. Tequeños\n\n0. Salir');
}

function consumeDrink(drink) {
    alert("Has consumido un " + drink);
    let pregunta = prompt("¿Deseas consumir más?\n\n- Si\n- No");
    if (pregunta === "Si") {
        alert("Recuerda: Consumir bebidas alcohólicas en exceso es dañino");
    } else {
    }
}

function consumeSnack() {
    alert("¡Buen provecho!");
    let pregunta = prompt("¿Deseas consumir más?\n\n- Si\n- No");
    if (pregunta === "Si") {
    } else {
    }
}

function tip() {
    let propina = prompt("¿Cuánta propina deseas dejar?");
    if (propina <= 50) {
        alert("Eres tacaño, no vuelvas pronto");
    } else {
        alert("Eres muy generoso, ¡vuelve pronto!");
    }
}
//Inicio del menú del restaurante//
alert('Bienvenido al Bar "Hard-Rock"');
do {
    menu = showMenu();
    switch (menu) {
        case '1':
            do {    
                drink = drinklist();
                switch (drink) {
                    case '1':
                        consumeDrink('Pisco Sour');
                        break;
                    case '2':
                        consumeDrink('Whisky');
                        break;
                    case '3':
                        consumeDrink('Fernet');
                        break;
                    case '0':
                        break;
                    default:
                        prompt("No existe esa opción");
                        break;
                }
            } while (drink !== '0');
            break;
        case '2':
            do {    
                snack = snacklist();
                switch (snack) {
                    case '1':
                        consumeSnack('Salchipapa');
                        break;
                    case '2':
                        consumeSnack('Alitas BBQ');
                        break;
                    case '3':
                        consumeSnack('Tequeños');
                        break;
                    case '0':
                        break;
                    default:
                        alert("No existe esa opción");
                        break;
                }
            } while (snack !== '0');
            break;
        case '3':
            tip();
            break;
        case '0':
            break;
        default:
            alert("No existe esa opción");
            break;
    }
} while (menu !== '0');
alert('Gracias por su visita \n\n - Alejandro Nishiky Ruales-');
