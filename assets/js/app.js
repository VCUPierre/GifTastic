var topics = ["dwight schrute", "michael scott", "jim halpert", "pam beesly", "creed bratton"];

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
createButtons(1, topics);
//$("#home").append(JSON.stringify(topics));