'strict'
// Colosseum encounter ramdomizer
// started Oct. 20 2021

// set up arrays for areas with multiple encounters
const phenac_City = ['Bayleef', 'Quilava', 'Croconaw'];
const pyrite_Town = ['Furret', 'Misdreavus', 'Noctowl', 'Flaafy', 'Skiploom', 'Quagsire', 'Slugma', 'Qwilfish'];
const pyrite_bldg = ['Yanma', 'Remoraid', 'Mantine'];
const pyrite_Cave = ['Meditite', 'Dunsparce', 'Swablu'];
const the_Under = ['Ledian', 'Suicune'];
const the_Under_Subway = ['Gligar', 'Stantler', 'Piloswine', 'Sneasel'];
const shadow_Pkmn_Lab = ['Aipom', 'Murkrow', 'Forretress', 'Ariados', 'Granbull', 'Vibrava', 'Raikou'];
const realgam_Tower = ['Delibird', 'Sunflora', 'Heracross'];
const tower_Colosseum = ['Miltank', 'Absol', 'Houndoom', 'Tropius', 'Metagross', 'Tyranitar'];

function shuffle(arr, id) {
    //clear div incase user wishes to re-roll
    clear_Field(id);
    // randomly assign a position is the arr array to the pkmn variable
    let pkmn = Math.floor(Math.random() * arr.length);
    var html, newHtml;
    // the html that will be inserted into the div at the given id
    html = "<img src='PokeAssets/%image%.png' alt='choice' width='200' height='200'>";
    for(let i = 0; i < arr.length; i++){
        console.log(arr[pkmn]);
        if(arr[pkmn] === arr[i]) {
            newHtml = html.replace('%image%', arr[pkmn]);
            document.getElementById(id).innerHTML += newHtml;
        }
    }
    
};
// remove any html in the selected div
function clear_Field(id) {
    document.getElementById(id).innerHTML = "";
};
// Event listeners for all buttons correlating to different in-game zones
document.querySelector('.phenac').addEventListener('click', function() {
    shuffle(phenac_City, "city");
});

document.querySelector('.pyrite_town').addEventListener('click', function() {
    shuffle(pyrite_Town, "town");
});

document.querySelector('.pyrite_bldg').addEventListener('click', function() {
    shuffle(pyrite_bldg, "bldg");
})

document.querySelector('.pyrite_cave').addEventListener('click', function() {
    shuffle(pyrite_Cave, "cave");
});

document.querySelector('.under').addEventListener('click', function() {
    shuffle(the_Under, "under");
});

document.querySelector('.under_sub').addEventListener('click', function() {
    shuffle(the_Under_Subway, "subway");
});

document.querySelector('.pkmn_lab').addEventListener('click', function() {
    shuffle(shadow_Pkmn_Lab, "lab");
});

document.querySelector('.realgam').addEventListener('click', function() {
    shuffle(realgam_Tower, "realgam");
});

document.querySelector('.tower').addEventListener('click', function() {
    shuffle(tower_Colosseum, "colosseum");
});
