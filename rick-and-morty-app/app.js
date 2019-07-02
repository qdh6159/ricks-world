$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
          }
        }
      }
    });
  });


console.log("Wubba lubba dub-dub!")



let ricksArray = []; 
let squanchysArray = []
let squanchysFavoriteSquanch = []
let favoritesURL = `https://rickandmortyapi.com/api/character/${squanchysFavoriteSquanch}`
// let characterPageNumber = 1
let interdimensionalTrafficLight = 'green'
let urlC137 
let rickapedia = "https://rickandmortyapi.com/api/character/?page=1"
let rickapediaDefault = "https://rickandmortyapi.com/api/character/?page=1"
let allRicks = "https://rickandmortyapi.com/api/character/?name=rick"
let allMortys = "https://rickandmortyapi.com/api/character/?name=morty"

let firstVisit = 3
let favName = ""
let favNum = null

async function portalGun(url) {
    let response = await fetch(url)
    let data = await response.json()
    return data
};

async function returnFavorites(url) {
    console.log(squanchysFavoriteSquanch,favoritesURL)
    let response = await fetch(url)
    let favData = await response.json()
    return favData
};
    
function setupFavorites() {
    returnFavorites(`https://rickandmortyapi.com/api/character/${squanchysFavoriteSquanch}`)
        .then(favData =>{
            console.log(favData)
            $('body').off()
            $('.divImage').off()
            // Pull data from API
            squanchysArray = favData
            // rickapedia = data.info.next
            loopCharacters(squanchysArray)
            $(".divImage").on({
                mouseenter: function () {
                    $(".detailDiv").addClass('changeDetailDiv');
                    $(this).next().fadeIn()
                    // $('.detailDiv').fadeIn()
                    
                },
                mouseleave: function () {
                    $(".detailDiv").removeClass('changeDetailDiv')
                    $(this).next().fadeOut()
                    // $('.detailDiv').fadeOut()
                    
                }
            });
    
            $(".listDiv").on({
                mouseenter: function () {
                    $(this).find("i").addClass('changeOfHeart');
                    
                },
                mouseleave: function () {
                    $(this).find("i").removeClass('changeOfHeart')
                
                    
                }
            });
    
            
            $(".listDiv").closest("i").on("click", function(){
                console.log("heart clicked ")
                $(event.target).toggleClass("fas")
            })
    
            // $(".divImage").on("click", function(){
            //     console.log("image clicked")
            //     let favNum = $(this).next().children("#favCharacterId").text()
            //     console.log(favNum)
            //     squanchysFavoriteSquanch.push(favNum)
                
                
            
                
    
            // })

            $("body").on("click", ".divImage", function(){
                console.log("image clicked")
                favNum = $(this).next().children("#favCharacterId").text()
                
                favName = $(this).next().children("#grabName").text()
                console.log(favName)
                console.log(favNum)
                $('#rickCheck').text(favName)
                
                

                if(squanchysFavoriteSquanch.includes(favNum)) {
                    console.log("Character already in favorites. Remove?")
                    $("#centralModalSuccess").modal("show")
                    $('#warning').off()
                }else {
                    squanchysFavoriteSquanch.push(favNum)
                $('header').append(`<div class="alert alert-primary fade show" role="alert">Added ${favName} to your favorites!</div>`)
                setTimeout(function(){
                    $(".alert").alert('close')
                  }, 2000);
            }

                $("#warning").on('click', function(){
                    console.log("remove button clicked")
                    $("#mainBox").empty()
                    async function searchNumbers(arr) {
                        for( var i = 0; i < arr.length; i++){ 
                            if ( arr[i] === favNum) {
                              arr.splice(i, 1); 
                              i--;
                            }
                         }
                    }
                    searchNumbers(squanchysFavoriteSquanch)
                        .then(function(){
                            console.log(`removed ${favName}${favNum}`)
                            setupFavorites()

                            
                        })
                    

                    
                 });


                
               

                
                // let favCharacterNum = $(this).text()
                // console.log(favCharacterNum)
                // let favCharacter = $(event.target).attr("alt")
                // alert("added this character to your favorites")
                // squanchysFavoriteSquanch.push(favCharacter)
    
            })


    
            $('.detailDiv').hide()
            

            
            
        })
        .catch(err => console.error(err))
}
        

async function setup(url) {
    portalGun(url)
        .then(data =>{
            console.log(data)
            console.log(data.info.next)
            $('body').off()
            $('.divImage').off()
            // Pull data from API
            ricksArray = data.results
            rickapedia = data.info.next
            loopCharacters(ricksArray)
    
            
            $('.detailDiv').hide()
            if(firstVisit == 1 || firstVisit == 2 || firstVisit == 3 || firstVisit == 4) {
                firstVisit ++
                setup(rickapedia)
            }else{
                $(".divImage").on({
                    mouseenter: function () {
                        $(".detailDiv").addClass('changeDetailDiv');
                        $(this).next().fadeIn()
                        // $('.detailDiv').fadeIn()
                        
                    },
                    mouseleave: function () {
                        $(".detailDiv").removeClass('changeDetailDiv')
                        $(this).next().fadeOut()
                        // $('.detailDiv').fadeOut()
                        
                    }
                });
        
                $(".listDiv").on({
                    mouseenter: function () {
                        $(this).find("i").addClass('changeOfHeart');
                        
                    },
                    mouseleave: function () {
                        $(this).find("i").removeClass('changeOfHeart')
                    
                        
                    }
                });
        
                
                $(".listDiv").closest("i").on("click", function(){
                    console.log("heart clicked ")
                    $(event.target).toggleClass("fas")
                })
        
                $("body").on("click", ".divImage", function(){
                    console.log("image clicked")
                    favNum = $(this).next().children("#favCharacterId").text()
                    
                    favName = $(this).next().children("#grabName").text()
                    console.log(favName)
                    console.log(favNum)
                    $('#rickCheck').text(favName)
                    
                    

                    if(squanchysFavoriteSquanch.includes(favNum)) {
                        console.log("Character already in favorites. Remove?")
                        $("#centralModalSuccess").modal("show")
                        $('#warning').off()
                    }else {
                        squanchysFavoriteSquanch.push(favNum)
                    $('header').append(`<div class="alert alert-primary fade show" role="alert">Added ${favName} to your favorites!</div>`)
                    setTimeout(function(){
                        $(".alert").alert('close')
                      }, 2000);
                }

                    $("#warning").on('click', function(){
                        console.log("remove button clicked")
                        function searchNumbers(arr) {
                            for( var i = 0; i < arr.length; i++){ 
                                if ( arr[i] === favNum) {
                                  arr.splice(i, 1); 
                                  i--;
                                }
                             }
                        }
                        searchNumbers(squanchysFavoriteSquanch)
                        console.log(`removed ${favName}${favNum}`)
                     });


                    
                   
    
                    
                    // let favCharacterNum = $(this).text()
                    // console.log(favCharacterNum)
                    // let favCharacter = $(event.target).attr("alt")
                    // alert("added this character to your favorites")
                    // squanchysFavoriteSquanch.push(favCharacter)
        
                })
            }
            
            

            
            
        })
        .catch(err => console.error(err))
}

// setupFavorites()
setup(rickapedia)
// .then(function() {
    
// })



let light = "green"

// Infinite Scroll
// https://www.youtube.com/watch?v=76IANst0jwc&list=LLP-c0WGDa1fFuSs3QUYC4dQ&index=3&t=0s
$(window).scroll(function(){
    if($(this).scrollTop() + 1 >= $('body').height() - $(window).height())
        if(interdimensionalTrafficLight == 'green' && light == "green") {
            interdimensionalTrafficLight = 'red'
            console.log('new page would load now')
            // characterPageNumber ++
            // console.log(characterPageNumber)
            setup(rickapedia)

            setTimeout(function(){
                interdimensionalTrafficLight = 'green'
            }, 500)
        }
});



// All the buttons------------------------------------------------------------------------------------------------

$("#favoriteButton").on("click", function(e){
    e.preventDefault()
    firstVisit = 1
    light = "red"
    $("#mainBox").empty()
    setupFavorites()
    $('html, body').animate({
        scrollTop: $("ul").offset().top
    }, 1200);
})

$('#clicker').on("click", function(e){
    e.preventDefault()
    firstVisit = 3
    $("#mainBox").empty()
    light = "green"
    setup(rickapediaDefault)
    $('html, body').animate({
        scrollTop: $("ul").offset().top
    }, 1200);
})

$('#theRicks').on("click", function(e){
    e.preventDefault()
    firstVisit = 2
    $("#mainBox").empty()
    light = "red"
    console.log('click rick')
    setup(allRicks)
    $('html, body').animate({
        scrollTop: $("ul").offset().top
    }, 1200);
})

$('#theMortys').on("click", function(e){
    e.preventDefault()
    firstVisit = 3
    $("#mainBox").empty()
    light = "red"
    console.log('click morty')
    $('html, body').animate({
        scrollTop: $("ul").offset().top
    }, 1200);
    setup(allMortys)
})

$('#nameButton').on("click", function(e){
    e.preventDefault()
    let nameSearch = $('#searchBar').val()
    console.log(nameSearch)
    let nameURL = `https://rickandmortyapi.com/api/character/?name=${nameSearch}`
    firstVisit = 3
    $("#mainBox").empty()
    light = "red"
    console.log('searching names')
    setup(nameURL)
    $('html, body').animate({
        scrollTop: $("ul").offset().top
    }, 1200);
})



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
        let characterUrl = characterArray[i].url
        // console.log(characterId, characterName, characterSpecies, characterType, characterGender, characterLocation, characterOrigin)
        // console.log(characterStatus)
        // console.log(characterId)
        let name = characterArray[i].name                       //<div id="ghost"></div>

        // variables for each character detail window below
        
        let spanName = `<span id="grabName">${characterName}</span>`
        let spanId = `<span>Character id: ${characterId}</span>`
        let spanStatus = `<span>Status: ${characterStatus}</span>`
        let spanSpecies = `<span>Species: ${characterSpecies}</span>`
        let spanType = `<span>Type: ${characterType}</span>`
        let spanGender = `<span>Gender: ${characterGender}</span>`
        let spanLocation = `<span>Location: ${characterLocation}</span>`
        let spanOrigin = `<span>Origin: ${characterOrigin}</span>`
        // let spanUrl = `<span id="hide">${characterUrl}</span>`

        let image = `<i class="far fa-heart"></i><img class="divImage" src="${characterArray[i].image}" alt=${characterUrl}>`

        const divWindow = `<div class="detailDiv"><span id="favCharacterId"> ${characterId}</span>${spanName}<br><br>${spanId}<br>${spanStatus}<br>${spanSpecies}<br>${spanType}<br>${spanGender}<br>${spanLocation}<br>${spanOrigin}</div>`

        let pElementName = $('#mainBox').append(`<li class="fighter-list__item"><div class="transitionSetup"><div class="listDiv">${image}${divWindow}</div></div></div></li>`);
        pElementName;

        

       
    };
};

// setup();














  