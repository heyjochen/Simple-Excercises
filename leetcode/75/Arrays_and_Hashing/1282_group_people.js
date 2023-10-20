var groupThePeople = function(groupSizes) {
    let result = [],
        hash = {}

    for (const [index, person] of groupSizes.entries()){
        hash[person] ? hash[person].push(index) : hash[person] = [index]
        if (hash[person].length === person) {
            result.push(hash[person]);
            hash[person] = [];
        }
    }

    return result
};
