// inventory class

class Inventory {
    constructor(name, type, dop, condition) {
        this.name = name;
        this.type = type;
        this.dop = dop;
        this.condition = condition;
    }
}

// interactive class

class Interface {
    static displayInventory() {
        const inventoryStore = [{
                name: 'Iphone X',
                type: 'Gadget',
                dop: "12/13/2018",
                condition: 'working'
            },
            {
                name: 'Iphone X',
                type: 'Gadget',
                dop: "12/13/2018",
                condition: 'working'
            }
        ];

        const inventorys = inventoryStore;

        inventorys.foreach((inventory) =>
            Interface.addToList(inventory))
    }
    static addToList(inventory) {
        const list = document.getElementById('inventory-list')

        const row = document.createElement('tr')
        row.innerHTML = `<td> ${inventory.title}</td>`
    }
}