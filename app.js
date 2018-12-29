const submitInventory = document.getElementById("inventory-form");

// inventory class

class Inventory {
    constructor(name, type, serial, dop, condition) {
        this.name = name;
        this.type = type;
        this.serial = Serial;
        this.dop = dop;
        this.condition = condition;
    }
}

// interactive class

class Interface {
    static displayInventory() {
        const inventoryStore = [{
                name: "Iphone X",
                type: "Gadget",
                serial: "ased3455",
                dop: "12/13/2018",
                condition: "working"
            },
            {
                name: "Iphone X",
                type: "Gadget",
                serial: "deh3592m",
                dop: "12/13/2018",
                condition: "working"
            }
        ];

        const inventorys = inventoryStore;

        inventorys.forEach(inventory => Interface.addToList(inventory));
    }
    static addToList(inventory) {
        const list = document.getElementById("inventory-list");

        const row = document.createElement("tr");
        row.innerHTML = `
        <td> ${inventory.name}</td>
        <td> ${inventory.type}</td>
        <td> ${inventory.serial}</td>
        <td> ${inventory.dop}</td>
        <td> ${inventory.condition}</td>
        <td><a href="#" class= "btn btn-danger delete">X</a></td>
        `;
        list.appendChild(row);
    }

    static clearInputs() {
        document.getElementById("name").value = "";

        document.getElementById("type").value = "";

        document.getElementById("serial").value = "";

        document.getElementById("dop").value = "";

        document.getElementById("condition").value = "";
    }

    static deleteItem(el) {
        if (el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearAll() {
        const list = document.getElementById("inventory-list");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        Interface.printMessage("Inventory Deleted", "alert-success");
    }

    static printMessage(message, className) {
        const messageWrapper = document.createElement("div");
        messageWrapper.classList.add("text-center", "alert", className);
        messageWrapper.appendChild(document.createTextNode(message));

        document
            .querySelector(".primary ")
            .insertBefore(messageWrapper, submitInventory);
        setTimeout(function () {
            document.querySelector(".primary .alert").remove();
        }, 3000);
    }
}

// display inventory
document.addEventListener("DOMContentLoaded", Interface.displayInventory);

// submit an inventory

submitInventory.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const serial = document.getElementById("serial").value;
    const dop = document.getElementById("dop").value;
    const condition = document.getElementById("condition").value;
    // validate inventory Name
    if (name === "" || type === "" || serial === "") {
        // alert failed message
        Interface.printMessage("Please Complete Missing Field", "alert-danger");
    } else {
        // alert success message
        Interface.printMessage("Added Successfully", "alert-success");
        // instantiate class
        const inventory = new Inventory(name, type, serial, dop, condition);

        // Add Item to Inventory
        Interface.addToList(inventory);

        // clear input
        Interface.clearInputs();
    }
});
// clear all inventory

document
    .getElementById("clear-all")
    .addEventListener("click", Interface.clearAll);
// delete Inventory
document
    .getElementById("inventory-list")
    .addEventListener("click", function (e) {
        Interface.deleteItem(e.target);
        Interface.printMessage("Item Deleted", "alert-success");
    });