var topics = ["dwight schrute", "michael scott", "jim halpert", "pam beesly", "creed bratton"];
createButtons(1, topics);
$(document).on('click','button', function(event){
    console.log(event);
    console.log(event.currentTarget.id);
    console.log(event.currentTarget.innerText);
    //let clickedBtnId = event.currentTarget.id;
    let clickedBtnText = event.currentTarget.innerText
    getGIFs(clickedBtnText);
})

function createButtons(intialOrAdd, array){
    var buttonFromDom = $("#buttons");
    if (intialOrAdd === 1){
        for (let i = 0; i < array.length; i++){
            let aTagHolder = $("<a>");
            let gifbutton = $("<button>" , {id: "button" + i, class: "btn btn-success m-2", type: "button", value: i});
            gifbutton.text(topics[i]);
            aTagHolder.append(gifbutton);
            aTagHolder.appendTo(buttonFromDom);
        }
    }
}
function addGifToPage(results){
    //console.log("addGif-"+JSON.stringify(response));
    for (let i = 0; i < results.length; i++){
        //console.log("addGif - " + JSON.stringify(results[i]));
        let imgURL = results[i].images.original.url;
        let divElement = $('<div>', {id: 'gif'+i,class:'mr-1'});
        let ratingElement = $('<p>');
        let imgElement = $('<img>', {src: imgURL, alt: 'The Offic Gif image '+i,class:'imgStyle'});
        ratingElement.text(results[i].rating);
        divElement.append(ratingElement,imgElement);
        $('#giphy-holder').prepend(divElement);
    }
}
function getGIFs(searchItems) {
    let key = 'mWudcOMO3luZruIOWmCRci7FoSuXhUGO';

    if (Array.isArray(searchItems)){
        for (let i = 0; i < searchItems.length; i++){
            let url = 'http://api.giphy.com/v1/gifs/search?api_key='+key+'&q='+searchItems[i]+'&limit=10';
            $.ajax({
                url: url,
                method: 'GET'
            }).then(function(response){
                console.log(response);
            })
        }
    } else {
        let url = 'http://api.giphy.com/v1/gifs/search?api_key='+key+'&q='+searchItems+'&limit=10';
        $.ajax({
            url: url,
            method: 'GET'
        }).then(function(response){
            console.log(response);
            var results = response.data;
            addGifToPage(results);
        })
    }
}
//$("#home").append(JSON.stringify(topics));