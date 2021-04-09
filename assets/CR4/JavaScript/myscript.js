var moviesParsed = JSON.parse(movieList);
// console.table(moviesParsed) to see if the .parse worked and to display it nicely in a table

for (let i = 0; i < moviesParsed.length; i++) {

    // I used Bootstrap Horizontal-Cards.
    // https://getbootstrap.com/docs/5.0/components/card/#horizontal
    

    //Creating a div for my cards
    var cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card mb-3");
    cardContainer.setAttribute("style", "max-width: 45em; background-color: #3c6e71;");
    cardContainer.setAttribute("id", "cardContainer" + [i]);
    console.log(cardContainer)
    document.getElementById("maincontainer").appendChild(cardContainer);

    //Creating a row
    var cardRow = document.createElement("div");
    cardRow.setAttribute("class", "row g-0");
    cardRow.setAttribute("id", "cardRow" + [i]);
    document.getElementById("cardContainer" + [i]).appendChild(cardRow);

    //Creating my img-div
    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "col-4");
    imgDiv.setAttribute("id", "imgDiv" + [i]);
    document.getElementById("cardRow" + [i]).appendChild(imgDiv);

    // creating img
    var imgPoster = document.createElement("img");
    imgPoster.setAttribute("src", moviesParsed[i].image);
    imgPoster.setAttribute("id", "imgPoster" + [i]);
    document.getElementById("imgDiv" + [i]).appendChild(imgPoster);

    // creating div around card-body
    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "col-md-8");
    cardBodyDiv.setAttribute("id", "cardBodyDiv" + [i]);
    document.getElementById("cardRow" + [i]).appendChild(cardBodyDiv);

    //creating card-body
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardBody.setAttribute("id", "cardBody" + [i]);
    document.getElementById("cardBodyDiv" + [i]).appendChild(cardBody);

    //creating h5
    var h5 = document.createElement("h1");
    h5.setAttribute("class", "card-title text-white text-decoration-underline");
    var h5Text = document.createTextNode(moviesParsed[i].movieName);
    h5.appendChild(h5Text);
    document.getElementById("cardBody" + [i]).appendChild(h5);

    //creating p
    var p = document.createElement("p");
    p.setAttribute("class", "card-text text-white fs-5 text");
    var pText = document.createTextNode(moviesParsed[i].description)
    p.appendChild(pText);
    document.getElementById("cardBody" + [i]).appendChild(p);

    //creating Like-Button
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-dark")
    button.setAttribute("id", "button" + [i]);
    var buttonText = document.createTextNode("Like the Movie");
    button.appendChild(buttonText);
    document.getElementById("cardBody" + [i]).appendChild(button);

    //creating thumb
    var thumb = document.createElement("img");
    thumb.setAttribute("src", "https://www.pinclipart.com/picdir/middle/312-3123679_thumbs-up-facebook-logo-png-transparent-svg-vector.png");
    thumb.setAttribute("alt", "Thumb");
    thumb.setAttribute("id", "thumb");
    document.getElementById("cardBody" + [i]).appendChild(thumb);

    //creating Like-Counter
    var counter = document.createElement("span");
    var counterText = document.createTextNode("0");
    counter.appendChild(counterText);
    counter.setAttribute("class", "fs-2" + [i]);
    counter.setAttribute("id", "counter" + [i]);
    counter.setAttribute("style", "color: white;")
    document.getElementById("cardBody" + [i]).appendChild(counter);
    
    

    //here i collect all the buttons
    const btn = document.querySelectorAll("button");

    //creating a loop with a function that adds +1 to my key "likes" in my JSON-file and prints it in my html at my output-span with the id=counter (l.79-83)

    for (let x in btn){         //= for (x = 0, x < btn.length, x++){}, this comment is for myself to remember what the long version of the "let-in loop" looks like
        function clicker () {
            let printNumber = document.getElementById("counter" + [i]);
            let dataCount = moviesParsed[i].likes += 1;
            // console.log(dataCount)
            printNumber.innerHTML = dataCount + " Likes";
        };
        
    }
    btn[i].addEventListener("click", clicker); //my function(named "clicker") fires when my buttons[i] get clicked
    console.log(btn)
}