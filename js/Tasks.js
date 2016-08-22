if (typeof loadedFiles === "undefined") { var loadedFiles = {}; }

var Task;

(function () {

    var nextID = 0;

    Task = function (description, limitDate, priority, prerequisites) {
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

        if (typeof desc === "undefined" || desc === null) {
            this.desc = "";
        }
        else {
            this.desc = desc;
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
)();

Task.prototype.canBeDoneNow = function () {
    var result = false;
    if (this.limitDate === null) {
        result = true;
    }
    else if (!this.isExpired()) {
        if (this.prerequisites === null || this.prerequisites.every(Task.prototype.isCompleted)) {
            result = true;
        }
    }
    return result;
}

Task.prototype.isCompleted = function () {
    return task.completed;
}

Task.prototype.isExpired = function () {
    return task.limitDate === null || task.limitDate > now;
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

loadedFiles["Tasks.js"] = true;
