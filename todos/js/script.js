

async function getTodos() {

    try {
        // Väntar in tills datat har hämtats från todos.json
        const response = await fetch("./todos.json");

        // response.ok är att HTTP-status koden är 200 om hämtningen lyckas
        if(!response.ok) {
            throw new Error(`HTTP error status ${response.status}`);
        }

        // Väntar in till datat har parsats (översatts) till ett JS objekt
        const data = await response.json();

        // Kör display funktion
        displayTodos(data.todos);

        console.log("Inne i asynkrona funktion getTodos()");

    } catch(error) {
        console.error("Type of error", error);
    }

}


function displayTodos(todos) {
    // Hämta referens i DOM:en, ul
    const ul = document.getElementById("data-list");
    
    // Skapa ett li-element för varje todo
    todos.forEach(function(todo){
        const li = document.createElement("li");
        li.textContent = todo.task;
        if(todo.completed) {
            console.log("Completed task", todo.task);
        }
        ul.appendChild(li);
    })

}


// Asynkron
getTodos();
// Synkrona instruktioner 
for(let i = 0; i < 10; i++) {
    console.log("i", i);
}
console.log("Ett");
console.log("Två");
console.log("Tre");

