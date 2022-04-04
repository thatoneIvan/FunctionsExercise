// 1
function fozzieBear(){
    console.log ( "Wocka Wocka" );
}
fozzieBear(); // Wocka Wocka

// 2
function beaker(speak){
    console.log(`${ speak }, ${ speak }, ${ speak }, ${ speak }`); 
// ISSUE with line 11 it didn't give me the spaces in between. 
//    console.log(`${ speak }` .repeat(4));
};
beaker(`Meep`);

// 3
// function muppetShow( a, b){
//    if ( a === `Muppet` && b === `Show`)
//};


// 4
function kermit(){
    console.log(`Kermit the Frog`);
}
kermit();

// or
function kermit (){
    return `Kermit the Frog`
}
console.log(kermit());

// 5 
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    } 
    return false;
}

// 6
const manOrMuppet = function(){
    console.log(`Am I a man or a Muppet?`);
}
manOrMuppet();

// 7
rainbowConnection = () => `Someday we'll fins it. The Rainbow Connection. The lovers, the dreamers and me`;
console.log(rainbowConnection());
// 8
// no

// 9
// yes 

// BONUS
// 10a
const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`,
];
// 10b
const uppers = newMuppetMovies.map (function(x){
    return x.toUpperCase();
})
console.log(uppers);

// 11a
const oldMuppetMovies = [
    "The Muppet Movie", 
    "The Muppets Take Manhattan", 
    "The Great Muppet Caper", 
    "The Muppet Christmas Carol", 
    "Muppet Treasure Island",
    "Muppets From Space"
];

// 11b
const a = oldMuppetMovies.filter(twoMovies => twoMovies.length === 22);



// 12c
randomMuppet = (characters) => {
    console.log(`${characters}`);
}

// 12d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

console.log(`=`.repeat(25));

// 13
caps = string => {
    let chars = string.toLowerCase().split(``);
    for ( i = 0; 1 < chars.length; i+2){
        chars[i] = chars[i].toUpperCase();
    }
console.log(chars.join(``));
}

// OR

caps = (string) => {
    return string.split().map((v, i)=> i % 2 ?)
}