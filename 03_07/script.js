console.log("Self Exercise!");

const dormFridge = {
    name: "Everyday Dorm Fridge",
    color: "black",
    shelfNum: 2,
    doorOpen: false,
    toggleDoor: function(doorStatus){
        this.doorOpen=doorStatus
    }

};

console.log("Color of Dorm Fridge:", dormFridge.color)