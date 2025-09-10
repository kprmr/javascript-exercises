const findTheOldest = function(people) {
    const currentYear = 2025;
    return people.reduce((oldest, person) => {
    let ageOfOldest;
    if (oldest.yearOfDeath === undefined) {
      ageOfOldest = currentYear - oldest.yearOfBirth;
    } else {
      ageOfOldest = oldest.yearOfDeath - oldest.yearOfBirth;
    }

    let ageOfPerson;
    if (person.yearOfDeath === undefined) {
      ageOfPerson = currentYear - person.yearOfBirth;
    } else {
      ageOfPerson = person.yearOfDeath - person.yearOfBirth;
    }

    if (ageOfPerson > ageOfOldest) {
      return person;
    } else {
      return oldest;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
