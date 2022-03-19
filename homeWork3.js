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
function difference(arr1 ,arr2){
    let arr3 =[];
    let i = 0, j =0;

    arr1.sort();
    arr2.sort();

    if(arr1.length>=arr2.length){
         while(i<arr1.length){
             while(j<arr2.length){
                 if(arr1[i]===arr2[j]){
                  arr3.push(arr1[i]);
                  i++;
                  j++;
                }else if(arr1[i]<arr2[j]){
                     i++;
                    }else{
                         j++;
                    }
               }
               if(j === arr2.length){
                break;
            }
           }
    
     }else{
         while(j<arr2.length){
           while(i<arr1.length){
            if(arr1[i]===arr2[j]){
                arr3.push(arr1[i]);
                i++;
                j++;
            }else if(arr2[j]<arr1[i]){
                j++;
            }else{
                i++;
            }
        }
        if(i === arr1.length){
            break;
        }
    }
    
  }
  return arr3;
}

console.log(difference([1,2,3,0],[100,2,3,0,1,10]));