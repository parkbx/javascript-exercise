const removeFromArray = function(array, ...removeItem) {
    // let itemRemove = removeItem;
    
    for (let i = 0; i < removeItem.length; i++) {
        let itemRemove = array.indexOf(removeItem[i]);
        if (itemRemove != -1) {
            array.splice(itemRemove, 1);
        };
    };

    return array;
};

module.exports = removeFromArray
