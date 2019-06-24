console.log("It works")

// let favoriteGifs = [];

// let gifs = []
// $('#gifs-conatainer').hide()
// function renderGifs(gifs) {
//   $('#gifs-container').empty();
//     for (let i =0; i<gifs.length;i++){
//         const gif = gifs[i];
//         console.log(gif);
//         const $image = $(`<img src="${gif.images.downsized.url}">`);
//         $('#gifs-container').append($image);
//         // console.log(gifs[i].images.looping.mp4)
//         // $('.gifContainer').append(`<img src="${gifs[i]}.images.original.url.mp4" alt="">`)  
//     }
// }

// $('div').on('click', ( e ) => {
//     const clickedGif = $(event.target).attr('src');
//     favoriteGifs.push(clickedGif)
//     console.log(clickedGif)
//     console.log("Image has been clicked")
//     alert("GIF added to favorites")
//   })


// $('#favoriteButton').on('click', ( e ) => {
//     e.preventDefault();
//     $('div').toggle(function () {
//         $("img").css({height: "100px"});
//     }, function () {
//         $("img").css({height: "500px"});
//     });
//     console.log("Favorites button clicked")
//     $('#gifs-container').empty()
//     for(let i = 0; i < favoriteGifs.length; i++){
//         $('#gifs-container').append(`<img src="${favoriteGifs[i]}">`)
//     }
    

// })

$(document).ready(function(){
    $('.fighter-list__item').hover(function() {
        $(".fighter-list__item").addClass('transition');
    
    }, function() {
        $(".fighter-list__item").removeClass('transition');
    });
});


function loopCharacters(characterArray) {
    for(let i = 0; i < characterArray.length; i++) {
        console.log(characterArray[i].name)
        let name = characterArray[i].name
        let  image = `<img class="divImage" src="${characterArray[i].image}"></img>`
        let pElementName = $('#mainBox').append(`<li class="fighter-list__item"><div class="transitionSetup">${name}<div class="listDiv">${image}</div><div></li>`);
        pElementName;

        
    };
};




let characterArray = [];

$('#clicker').on( 'click', ( e ) => {
    e.preventDefault();
    const text = $('#searchBar').val();
    console.log(text)
    $('#searchBar').val('');

    let gifApi = {
        url:"https://rickandmortyapi.com/api/character/?page=1",
        success: (data)=>{
            console.log(data);
            // console.log(data.results[0].name)
            // let image = data.results.image
            // $('#gifs-container').append(`<img src="${image}"></img>`)
            characterArray = data.results
            loopCharacters(characterArray)
            
        },
        error: ()=>{
            console.log('bad request');
        }
    }
    $.ajax(gifApi)

    


  });
  