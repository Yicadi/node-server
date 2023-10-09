const { Console } = require('console');
const readline = require('readline');

//interfaz de lectura de linea
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//array almacenar tareas
let tasks = [];

//funcion añadir tarea
function addTask() {
    rl.question('indicador de la tarea:',
        (indicator) => {
            rl.question('descripcion de la tarea',
                (description) => {
                    const task = {
                        indicator,
                        description,
                        completed: false
                    };
                    task.push(task);
                    console.log('tarea añadida con exito.');
                    showMenu();
                });
        });
}

//funcion eliminar tarea
function deleteTask() {
    rl.question('indice de la tarea a eliminar: ', (index) => {
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            console.log('tarea eliminada con exito.');
        
        } else {
            console.log('indice invalido, tarea no encontrada,');
            
        }
        showMenu();
    }
        
        //funcion completar tarea
 function completeTask() {
            rl.question('indice de la tarea a completar:', (index) => {
                if (index >= 0 && index < tasks.length) {
                    tasks[index].completed = true;
                    console.log('tarea completada con exito.');
                } else {
                    console.log('indice invalido, tarea no encontrada.');
                }
                showMenu();
            });
        }

        //funcion mostrar menu y ejecutar lo seleccionado
        function showMenu() {
            console.log('\n--- menu---');
            console.log('1. añadir tarea');
            console.log('2. eliminar tarea');
            console.log('3. completar tarea');
            console.log('4. salir');

            rl.question('seleccione una opcion:', (option) => {
                switch (option) {
                    case '1':
                        addTask();
                        break;
                    case '2':
                        deleteTask();
                        break;
                    case '3':
                        completeTask();
                        break;
                    default:
                        console.log('opcion invalida. por favor, seleccione una opcion valida.');
                        showMenu();
                        break;
                }
            });
         }
    )}
    
    
    
    
    
    


    