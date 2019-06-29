// console.log("Wubba lubba dub-dub!")

// function loopCharacters(characterArray) {
//     for(let i = `${start}`; i < characterArray.length; i++) {
//         let characterId = characterArray[i].id
//         let characterName = characterArray[i].name
//         let characterStatus = characterArray[i].status
//         let characterSpecies = characterArray[i].species
//         let characterType = characterArray[i].type
//         let characterGender = characterArray[i].gender
//         let characterLocation = characterArray[i].location.name
//         let characterOrigin = characterArray[i].origin.name
//         // console.log(characterId, characterName, characterSpecies, characterType, characterGender, characterLocation, characterOrigin)
//         // console.log(characterStatus)
//         // console.log(characterId)
//         let name = characterArray[i].name

//         // variables for each character detail window below
//         let image = `<img class="divImage" src="${characterArray[i].image}"></img>`
//         let spanName = `<span>Name: ${characterName}</span>`
//         let spanId = `<span>Character id: ${characterId}</span>`
//         let spanStatus = `<span>Status: ${characterStatus}</span>`
//         let spanSpecies = `<span>Species: ${characterSpecies}</span>`
//         let spanType = `<span>Type: ${characterType}</span>`
//         let spanGender = `<span>Gender: ${characterGender}</span>`
//         let spanLocation = `<span>Location: ${characterLocation}</span>`
//         let spanOrigin = `<span>Origin: ${characterOrigin}</span>`

//         const divWindow = `<div class="detailDiv">${spanName}<br><br>${spanId}<br>${spanStatus}<br>${spanSpecies}<br>${spanType}<br>${spanGender}<br>${spanLocation}<br>${spanOrigin}</div>`

//         let pElementName = $('#mainBox').append(`<li class="fighter-list__item"><div class="transitionSetup"><div class="listDiv">${image}${divWindow}</div></div></div></li>`);
//         pElementName;
//         // const detailWindow = $('.detailDiv')
//         // detailWindow.append(`<h4>${characterName}</h4>`)
//         $('.detailDiv').hide()
//     };
// };

// let start = 0
// let ricksArray = []; 
// let squanchysFavoriteSquanch = []
// let characterPageNumber = 1
// let interdimensionalTrafficLight = 'green'
// let urlC137 = "https://rickandmortyapi.com/api/character/?page=4"

// let fetchCharacters = {
//     // url:`https://rickandmortyapi.com/api/character/?page=${characterPageNumber}`,
//     url: urlC137,
//     success: (data)=>{
//         console.log(data);
//         // characterArray = data.results
//         for(let i = 0; i < data.results.length; i++){
//             console.log(data.results[i])
//             console.log(data.info.next)
//             urlC137 = data.info.next
//             ricksArray.push(data.results[i])
//             console.log(`Pushed ${data.results[i].name} to the character array`)
//         }
//         loopCharacters(ricksArray)
        




//         $(".divImage").on({
//             mouseenter: function () {
//                 $(".detailDiv").addClass('changeDetailDiv');
//                 $(this).next().fadeIn()
//             },
//             mouseleave: function () {
//                 $(".detailDiv").removeClass('changeDetailDiv');
//                 $(this).next().fadeOut()
//             }
//         });
//     },
//     error: ()=>{
//         console.log('bad request');
//     }
// }
// $.ajax(fetchCharacters)


// // https://www.youtube.com/watch?v=76IANst0jwc&list=LLP-c0WGDa1fFuSs3QUYC4dQ&index=3&t=0s
// $(window).scroll(function(){
//     if($(this).scrollTop() + 1 >= $('body').height() - $(window).height())
//         if(interdimensionalTrafficLight = 'green') {
//             interdimensionalTrafficLight = 'red'
//             console.log('new page would load now')
//             // characterPageNumber ++
//             start += 20
//             console.log(characterPageNumber)
//             $.ajax(fetchCharacters)

//             setTimeout(function(){
//                 interdimensionalTrafficLight = 'green'
//             }, 2000)
//         }
// });

// https://www.youtube.com/watch?v=chavThlNz3s






function loopCharacters(characterArray) {
    for(let i = 0; i < characterArray.length; i++) {
        let characterId = characterArray[i].id
        let characterName = characterArray[i].name
        let characterStatus = characterArray[i].status
        let characterSpecies = characterArray[i].species
        let characterType = characterArray[i].type
        let characterGender = characterArray[i].gender
        let characterLocation = characterArray[i].location.name
        let characterOrigin = characterArray[i].origin.name
        // console.log(characterId, characterName, characterSpecies, characterType, characterGender, characterLocation, characterOrigin)
        // console.log(characterStatus)
        // console.log(characterId)
        let name = characterArray[i].name

        // variables for each character detail window below
        let image = `<img class="divImage" src="${characterArray[i].image}"></img>`
        let spanName = `<span>Name: ${characterName}</span>`
        let spanId = `<span>Character id: ${characterId}</span>`
        let spanStatus = `<span>Status: ${characterStatus}</span>`
        let spanSpecies = `<span>Species: ${characterSpecies}</span>`
        let spanType = `<span>Type: ${characterType}</span>`
        let spanGender = `<span>Gender: ${characterGender}</span>`
        let spanLocation = `<span>Location: ${characterLocation}</span>`
        let spanOrigin = `<span>Origin: ${characterOrigin}</span>`

        const divWindow = `<div class="detailDiv">${spanName}<br><br>${spanId}<br>${spanStatus}<br>${spanSpecies}<br>${spanType}<br>${spanGender}<br>${spanLocation}<br>${spanOrigin}</div>`

        let pElementName = $('#mainBox').append(`<li class="fighter-list__item"><div class="transitionSetup"><div class="listDiv">${image}${divWindow}</div></div></div></li>`);
        pElementName;

        $(".divImage").on({
            mouseenter: function () {
                $(".detailDiv").addClass('changeDetailDiv');
                $(this).next().fadeIn()
            },
            mouseleave: function () {
                $(".detailDiv").removeClass('changeDetailDiv');
                $(this).next().fadeOut()
            }
        });

        // const detailWindow = $('.detailDiv')
        // detailWindow.append(`<h4>${characterName}</h4>`)
        $('.detailDiv').hide()
    };
};

let ricksArray = []; 
// let squanchysFavoriteSquanch = []
// let characterPageNumber = 1
let interdimensionalTrafficLight = 'green'
let urlC137 


let rickapedia = "https://rickandmortyapi.com/api/character/?page=1"

function setup() {
    portalGun(rickapedia)
        .then(data =>{
            console.log(data)
            console.log(data.info.next)
            // Pull data from API
            ricksArray = data.results
            rickapedia = data.info.next
            loopCharacters(ricksArray)

            
            
        })
        .catch(err => console.error(err))
}




async function portalGun(url) {
let response = await fetch(url)
let data = await response.json()
return data
}

setup();


// https://www.youtube.com/watch?v=76IANst0jwc&list=LLP-c0WGDa1fFuSs3QUYC4dQ&index=3&t=0s
$(window).scroll(function(){
    if($(this).scrollTop() + 1 >= $('body').height() - $(window).height())
        if(interdimensionalTrafficLight = 'green') {
            interdimensionalTrafficLight = 'red'
            console.log('new page would load now')
            // characterPageNumber ++
            // console.log(characterPageNumber)
            setup()

            setTimeout(function(){
                interdimensionalTrafficLight = 'green'
            }, 500)
        }
});



// const request = fetch()

//     request()
//         .then(response => response.json())
//         .then(data => console.log(data.results))
//         .catch(error => console.log(`Fetch failed: ${error}`))















// let loopOne = function(){
//     for(let i = 0; i < data.results.length; i++){
//             console.log(data.results[i])
//             console.log(data.info.next)
//             urlC137 = data.info.next
//             ricksArray.push(data.results[i])
//             console.log(`Pushed ${data.results[i].name} to the character array`)
//         }
// }

  