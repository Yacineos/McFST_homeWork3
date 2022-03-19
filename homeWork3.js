//Exercice 1 :
Yacine = {
  hi: "hello world",
  name: "Yacine",
  age: 30,
  job: "Project manager",
};
Omar = {
  hi: "hello world",
  age: 30,
  job: "Project manager",
};
function compare2object(obj1, obj2) {
  // the logic behind this function is that I'll iterate the object
  // properties of the object with the least property , 
  //if we find one key  value different we return false else we return true
  if (Object.keys(obj1).length >= Object.keys(obj2).length) {
    for (key in obj2) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  } else {
    for (key in obj1) {
      if (obj2[key] !== obj1[key]) {
        return false;
      }
    }
    return true;
  }
}

console.log(compare2object(Yacine, Omar));
//Exercice 2 :
