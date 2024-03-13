//IIFE
(() => {
    //state variables
    let toDoListArray = [];
    //ui variables
    const form = document.querySelector(".form");
    const input = form.querySelector(".form_input");
    const ul = document.querySelector(".toDoList");

    //event listeners
    form.addEventListener("submit", (e) => {
        //prevent default ehaviour; page reload
        e.preventDefault();
        //give item a unique ID
        let itemID = String(Date.now());
        //get/assign input value
        let toDoItem = input.value;
        //pass ID and item into functions
        addItemToDOM(itemID, toDoItem);
        addItemToArray(itemID, toDoItem);

        input.value = "";
    });

    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        if (!id) return; //user clicked in something else
        //pass id through to functions
        removeItemFromDOM(id);
        removeItemFromArray(id);
    }

    );

    //functions
    function addItemToDOM(itemID, toDoItem) {
        //create a li
        const li = document.createElement("li");
        li.setAttribute("data_id", itemID);
        //add toDoItem text to li
        li.innerText = toDoItem;
        //add li to the DOM
        ul.appendChild(li);
    }

    function addItemToArray(itemID, toDoItem) {
        //addd item to an Array with an ID so we can find it and delete it later
        toDoListArray.push({itemID, toDoItem});
        console.log(toDoListArray);
    }

    function removeItemFromDOM(id) {
        //get the list item by data ID
        var li = document.querySelector('[data_id ="' +id + '"]')
        //remove list item
        ul.removeChild(li);
    }

    function removeItemFromArray (id) {
        //create a new toDoListArray with all the li's that don't march the ID
        toDoListArray = toDoListArray.filter((Item) => item.itemID !== id);
        console.log(toDoListArray);
    }

})();