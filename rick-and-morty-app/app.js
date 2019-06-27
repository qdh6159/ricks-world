console.log("It works")

function loopCharacters(characterArray) {
    for(let i = 0; i < characterArray.length; i++) {
        let name = characterArray[i].name
        let  image = `<img class="divImage" src="${characterArray[i].image}"></img>`
        let pElementName = $('#mainBox').append(`<li class="fighter-list__item"><div class="transitionSetup">${name}<div class="listDiv">${image}<div class="detailDiv"></div></div></div></li>`);
        pElementName;
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
  