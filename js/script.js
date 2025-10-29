

async function getTodos() {


    // Väntar in tills datat har hämtats från todos.json
    const response = await fetch("./todos.json");

    // response.ok är att HTTP-status koden är 200 om hämtningen lyckas
    if(!response.ok) {
        throw new Error(`HTTP error status ${response.status}`);
    }

    // Väntar in till datat har parsats (översatts) till ett JS objekt
    const data = await response.json();

    console.log(data.todos[0].task);

}


getTodos();

