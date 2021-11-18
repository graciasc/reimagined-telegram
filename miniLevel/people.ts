// Mini Level Up
// methods that make it easier : .map .filter

// Giving shape to people
type People = Array<{ [key: string]: string | number }>;

const people: People = [
  { name: "Gracias", age: 40 },
  { name: "Nav", age: 70 },
  { name: "Billy", age: 10 },
  { name: "Carrie", age: 45 },
];

// Way to read this is expects a parameter that has the shape of People and returns a string
function allNames(people: People): string {
  // Loop through people and return all the name of the people.
  return "";
}

function allAges(people: People): number {
  // Loop through people and return all ages.
  return 0;
}

function inTwentyYears(people: People): string {
  // Loop through people and return what age they will be in 20 years.
  return "";
}

function getSpecificNames(people: People): { [key: string]: string | number } {
  // filter out a person
  return {};
}

// call functions below
