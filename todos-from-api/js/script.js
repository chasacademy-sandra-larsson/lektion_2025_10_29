async function getTodos() {

    try {
        // Väntar in tills datat har hämtats från todos.json
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");

        // response.ok är att HTTP-status koden är 200 om hämtningen lyckas
        if(!response.ok) {
            throw new Error(`HTTP error status ${response.status}`);
        }

        // Väntar in till datat har parsats (översatts) till ett JS objekt
        const data = await response.json();

        // Logga ut datan
        console.log(data);

        // Visa alla todos i DOM:en
        displayTodos(data);
        

    } catch(error) {
        console.error("Type of error", error);
    }

}

function displayTodos(todos) {
  const ul = document.getElementById("data-list");
  todos.forEach(function(todo) {
    const li = document.createElement("li");
    li.textContent = todo.title;
    ul.appendChild(li);
  })

}


getTodos();