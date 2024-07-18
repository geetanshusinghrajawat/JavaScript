const lang = {
    js: "JavaScript",
    cpp:"C++",
    rb: "Ruby",
    py: "Python",
}
for (const key in lang) {
    //console.log(key);
    //console.log(lang[key]);
    console.log(`${key}: shortcut is for ${lang[key]}`);
}

MyArr= ["js","ruby", "Python","java","cpp"]
for (const key in MyArr) {
    //console.log(key);
    //console.log(MyArr[key]);
    console.log(`${key}: ${MyArr[key]}`);
}

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('RUS',"Russia")

for (const key in map) {
    console.log(key);
}