const findTheOldest = function(people) {
    let ages = people.map(person => {
        if (person.yearOfBirth === undefined) {
            return 0
        }
        if (person.yearOfDeath === undefined) {
            const year = new Date().getFullYear()
            return year - person.yearOfBirth
        }
        return person.yearOfDeath - person.yearOfBirth
    })
    const oldestAge = Math.max(...ages)
    const oldestIndex = ages.indexOf(oldestAge)
    return people[oldestIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
