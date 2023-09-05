//  This is a great event to handle your page initialization
// the function pageIsLoaded will not be call until the page is loaded
window.addEventListener('load', () => pageIsLoaded());
// window.onload = pageIsLoaded();          //  this is an alternate means to set the load event handler

//  put all initialization code into this method.
//  It will only be evoked once the page is loaded
function pageIsLoaded()
{
    //  get the references to a couple of elements on the page
    let url = document.getElementById('url');
    let bgDiv = document.getElementById("bgDiv");
    let id = document.getElementById("id");

    //  why do we have the array reference [0] on this request?
    //      because multiple elements on the page might have the same name
    let name = document.getElementsByName("name")[0];

    //  Let's add event listeners to the different elements on the page
    //  mouseover and mouseout will change the color with each event
    id.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "yellow";
    });
    id.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = "lightgreen";
        e.target.style.width = 100 + Math.random()*400 +"px";
    });

    //  clicking on the name div will randomly change the color
    //  and reandonly change the size between 100 and 199 pixels
    name.addEventListener('click', (e) => {
        e.target.style.backgroundColor = getRandomColor();
        let width = 100 + Math.random()*100;
        e.target.style.width = width + "px";
        e.target.innerHTML = width;
    } );

    //  Just some random JavaScript to alter the style of some events
    //      we can change the CSS styling with JS
    bgDiv.style.backgroundColor = "lightgreen";
    bgDiv.style.height = "125px";
    bgDiv.style.width = "125px";

    //  the document object has all kinds of info on the page you are loading
    //  .URL will provide you with the URL of your page
    //  This is also a possible quiz answer
    url.innerHTML += document.URL;

    //  Let's add a mouse move event and observe the X and Y coordinates change as the mouse moves
    //  If this is too busy (too much text changing on the screen) change it to a mouseover or click event
    bgDiv.addEventListener('mousemove', (e) => {
        let color = getRandomColor();
        bgDiv.style.backgroundColor = color;
        bgDiv.innerHTML = color + '<br><hr>(' + e.clientX + ", " + e.clientY + ')';
    });

    //  Demonstrating the query selector to get control of some screen elements
    //  querySelector is just another way to get a reference to the screen elements
    document.querySelector("#id").innerHTML         = "<em>Selected using id</em>";
    document.querySelector(".class").innerHTML      = "<b>Selected using Class</b>";
    document.querySelector("[name=name]").innerHTML = "<b>Selected using Name</b>";

    //  we will set the initial color of the background using the getRandomColor function
    document.querySelector("#id").style.backgroundColor         = getRandomColor();
    document.querySelector(".class").style.backgroundColor      = getRandomColor();
    document.querySelector("[name=name]").style.backgroundColor = getRandomColor();
}

//      just a simple utility function to create a string of Hexadecimal characters
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    //  we will build an RRGGBB string to set the background color of a div
    for (let i = 0; i < 6; i++) {
        //  get a random number between 0 and 15
        //  use that as the index into the letters string
        //  add it to the color string
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
