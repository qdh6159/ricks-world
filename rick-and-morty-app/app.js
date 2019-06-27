console.log("It works")

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
        let  image = `<img class="divImage" src="${characterArray[i].image}"></img>`
        let pElementName = $('#mainBox').append(`<li class="fighter-list__item"><div class="transitionSetup">${name}<div class="listDiv">${image}<div class="detailDiv">name: <h5>${characterName}</h5></div></div></div></li>`);
        pElementName;
        // const detailWindow = $('.detailDiv')
        // detailWindow.append(`<h4>${characterName}</h4>`)
        $('.detailDiv').hide()
    };
};

let characterArray = [];

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

  let gifApi = {
    url:"https://rickandmortyapi.com/api/character/?page=1",
    success: (data)=>{
        console.log(data);
        characterArray = data.results
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
$.ajax(gifApi)
  