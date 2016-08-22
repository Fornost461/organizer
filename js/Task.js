if (typeof loadedFiles === "undefined") { var loadedFiles = {}; }

var Task;

(function () {

    var nextID = 0;

    Task = function (description, startingDate, endingDate, priority, prerequisites) {
        "use strict";

        // private fields

        var ID = nextId;
        nextId += 1;


        // privileged methods

        this.getID = function () {
            return ID;
        };


        // public fields

        this.completed = false;
        this.children = [];


        if (typeof description === "undefined" || description === null) {
            this.description = "";
        }
        else {
            this.description = description;
        }


        if (typeof startingDate === "undefined") {
            this.startingDate = null;
        }
        else {
            this.startingDate = startingDate;
        }


        if (typeof limitDate === "undefined") {
            this.limitDate = null;
        }
        else {
            this.limitDate = limitDate;
        }


        if (typeof priority === "undefined" || priority === null) {
            this.priority = 0;
        }
        else {
            this.priority = priority;
        }


        if (typeof prerequisites === "undefined") {
            this.prerequisites = null;
        }
        else {
            this.prerequisites = prerequisites;
        }
    };

    Task.prototype.prepareForPrinting = function (output, indentLevel) {
        output.push([indentLevel, this.description]);
        this.children.map(function () { Task.prototype.print(output, indentLevel + 1); });
    };
)();

Task.prototype.canBeDoneNow = function () {
    var result = false;
    if (this.startingDate === null || this.startingDate.getTime() < Date.now()) {
        if (this.endingDate === null || Date.now() < this.endingDate.getTime()) {
            if (this.prerequisites === null || this.prerequisites.every(Task.prototype.isCompleted)) {
                result = true;
            }
        }
    }
    return result;
}

Task.prototype.isCompleted = function () {
    return this.completed;
}

Task.prototype.isExpired = function () {
    return this.limitDate !== null && this.limitDate.getTime() < Date.now();
}

Task.prototype.removeChild = function (child) {
    var index = this.children.indexOf(child);
    if (index >= 0) {
        this.children.splice(index, 1);
    }
    else {
        throw new Error("[child not found] child: “" + child + "”; parent: “" + this + "”.");
    }
};

Task.prototype.addChild = function (child) {
    this.children.push(child);
};


loadedFiles["Task.js"] = true;
