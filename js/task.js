if (typeof loadedFiles === "undefined") { var loadedFiles = {}; }

var makeTask = (function () {
    var nextID = 0;

    function getNextId() {
        nextID += 1;
        return nextID;
    }

    return function (parent, description, limitDate, priority, prerequisites) {
        "use strict";
        var instance = {};


        // private methods

        //~ var privateFunction = function (args) {
            
        //~ };


        // privileged methods

        instance.getID = function () {
            return ID;
        };

        instance.removeChild = function (child) {
            var index = instance.indexOf(child);
            if (index < 0) {
                throw new Error("child not found. child: “" + child + "”. parent: “" + instance + "”");
            }
            else {
                instance.splice(index, 1);
            }
        };

        instance.addChild = function (child) {
            instance.children.push(instance);
        };

        instance.setParent = function (newParent) {
            if (instance.parent !== null) {
                instance.parent.removeChild(instance);
            }
            instance.parent = newParent;
            instance.parent.addChild(instance);
        };

        instance.canBeDoneNow = function () {
            if ()
            // TODO
        };

        instance.expired = function () {
            // TODO
        };


        // private fields

        var ID = getNextId();


        // public fields

        instance.parent = parent;
        instance.children = [];

        if (typeof desc === "undefined" || desc === null) {
            instance.desc = "";
        }
        else {
            instance.desc = desc;
        }


        if (typeof limitDate === "undefined") {
            instance.limitDate = null;
        }
        else {
            instance.limitDate = limitDate;
        }


        if (typeof priority === "undefined" || priority === null) {
            instance.priority = 0;
        }
        else {
            instance.priority = priority;
        }


        if (typeof prerequisites === "undefined") {
            instance.prerequisites = null;
        }
        else {
            instance.prerequisites = prerequisites;
        }

        return instance;
    };
)();

loadedFiles["task.js"] = true;
