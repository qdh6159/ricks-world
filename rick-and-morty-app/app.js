console.log("It works")
let start = 0
function loopCharacters(characterArray) {
    for(let i = `${start}`; i < characterArray.length; i++) {
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
        // const detailWindow = $('.detailDiv')
        // detailWindow.append(`<h4>${characterName}</h4>`)
        $('.detailDiv').hide()
    };
};

let characterArray = []; 


let fetchCharacters = {
    url:"https://rickandmortyapi.com/api/character/?page=1",
    success: (data)=>{
        console.log(data);
        // characterArray = data.results
        for(let i = 0; i < data.results.length; i++){
            console.log(data.results[i])
            characterArray.push(data.results[i])
            console.log(`Pushed ${data.results[i].name} to the character array`)
        }
        loopCharacters(characterArray)
        




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
    },
    error: ()=>{
        console.log('bad request');
    }
}
$.ajax(fetchCharacters)




// let characterArray = [];

// // THE INITIAL CLICK
// $('#clicker').on( 'click', ( e ) => {
//     e.preventDefault();
//     const text = $('#searchBar').val();
//     console.log(text)
//     $('#searchBar').val('');
//     // The following runs ~after~ THE INITIAL CLICK
//     let gifApi = {
//         url:"https://rickandmortyapi.com/api/character/?page=1",
//         success: (data)=>{
//             console.log(data);
//             // console.log(data.results[0].name)
//             // let image = data.results.image
//             // $('#gifs-container').append(`<img src="${image}"></img>`)
//             characterArray = data.results
//             loopCharacters(characterArray)
//             $(".divImage").on({
//                 mouseenter: function () {
//                     //stuff to do on mouse enter
//                     console.log("Mouse is over nav")
//                     $(".detailDiv").addClass('changeDetailDiv');
//                     // $(".divImage").next().fadeIn()
//                     console.log("*")
//                 },
//                 mouseleave: function () {
//                     //stuff to do on mouse leave
//                     console.log("Mouse is out of nav")
//                     $(".detailDiv").removeClass('changeDetailDiv');
//                     console.log("x")
//                 }
//             });
//         },
//         error: ()=>{
//             console.log('bad request');
//         }
//     }
//     $.ajax(gifApi)
//   });


  