if (typeof loadedFiles === "undefined") { var loadedFiles = {}; }

var makeTask = (function () {
    var nextID = 0;

    function getNextId() {
        nextID += 1;
        return nextID;
    }

    return function (desc, limitDate, priority, prerequisites) {
        "use strict";
        var instance = {};

        // private methods
        //~ var privateFunction = function (args) {
            
        //~ };

        // privileged methods
        instance.getID = function () {
            return ID;
        };

        // private fields
        var ID = getNextId();

        // public fields
        instance.desc = desc;
        instance.limitDate = limitDate;
        instance.priority = priority;
        instance.prerequisites = prerequisites;

        return instance;
    };
)();

loadedFiles["task.js"] = true;
