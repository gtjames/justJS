const volcanoes = require('./volcanoes.json');
eruptedInYear(1970);


// Find the volcanoes in where ever
//eruptedIn('Italy');


// Create a function to count volcanoes for a given country.
//       Return the number of volcanoes for the country
//           function countEruptions(country)
let catchTheCount;
catchTheCount = countEruptions('New Zealand');
console.log(`Eruptions in New Zealand ${catchTheCount}`);

catchTheCount = countEruptions('Ecuador');
console.log(`Eruptions in Ecuador ${catchTheCount}`);

let eruptionsCount = eruptionsBetweeen(2000, 2018);
console.log(`Eruptions between two years ${eruptionsCount} `)

let above;
above = countEruptionsAbove(1000);
console.log(`Eruptions above 1000 feet: ${above}`);

// Count the number of volcanoes between year1 and year2
function eruptionsBetweeen(year1, year2) {
  let add = 0;
  for (const vol of volcanoes) {
    if (vol.Year >= year1 && vol.Year <= year2)
      add++;
  }
  return add;
}

// Add up how many people died in all eruptions. There is a field called DEATH in the valcano data use it.
//      The DEATH attribute is sometimes a string so to convert it to a number 
//      you need to do something like this --- volcano.DEATH*1 to convert it to a number

let totalDead = 0;
for (const volcano of volcanoes) {
  totalDead += volcano.DEATHS * 1;
}
console.log(`total deaths from volcanoes:  ${totalDead}`)

let list = volcanoes.filter(v => v.Country == 'Italy');
console.table(list);

let volcanoList = listOfVolcanoes('Italy');
console.table(volcanoList);

function eruptedInYear(year) {
  for (const vol of volcanoes) {
    if (vol.Year == year)
      console.table(vol);
  }
}

function eruptedIn(country) {
  for (const vol of volcanoes) {
    if (vol.Country == country)
      console.table(vol);
  }
}

function listOfVolcanoes(country) {
  let volcanoList = [];
  for (const vol of volcanoes) {
    if (vol.Country == country) {
      volcanoList.push(vol);
    }
  }
  return volcanoList;
}

function countEruptions(country) {
  let count = 0;
  for (const vol of volcanoes) {
    if (vol.Country == country) {
      count++;
    }
  }
  return count;
}

function countEruptionsAbove(elevation) {
  let count = 0;
  for (const vol of volcanoes) {
    if (vol.Elevation >= elevation) {
      count++;
    }
  }
  return count;
}