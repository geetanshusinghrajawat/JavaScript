const marvel = ["thor","Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]
//marvel.push(dc)
// console.log(marvel);
//heros= marvel.concat(dc)
//console.log(heros);

heros= [...marvel,...dc]
console.log(heros);
