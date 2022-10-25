const findTheOldest = function (people) {

  const d = new Date();
  let thisYear = d.getFullYear();

  let ages = people.map(person => ({
    name: person.name,
    age: (person.yearOfDeath) ?
      person.yearOfDeath - person.yearOfBirth :
      thisYear - person.yearOfBirth
  }));

  let oldestAge;


  //console.log(thisYear + " " + typeof (thisYear));
  // for (let i = 0; i < ages.length; i++) {

  //   console.log(ages[i].name + " " + ages[i].age);

  // }

  const ids = ages.map(object => {
    return object.age;
    // https://bobbyhadz.com/blog/javascript-get-max-id-in-array-of-objects
  });

  for (let i = 0; i < ages.length; i++) {
    oldestAge = Math.max(...ids);
    console.log(oldestAge);

    if (oldestAge == ages[i].age) {

      //console.log(people[i].name + " " + typeof (people[i].name));
      return ages[i];

    }
  }


};

// Do not edit below this line
module.exports = findTheOldest;
