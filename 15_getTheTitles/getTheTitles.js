const getTheTitles = function(obj) {
    let titleArray = [];
    for (let thing of obj) {
        titleArray.push(thing.title);
    }
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
