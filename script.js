const link1= document.getElementById("topic1");
const link2= document.getElementById("topic2");
const link3= document.getElementById("topic3");
const link4= document.getElementById("topic4");
const info = document.getElementById("info");
const colors= ["purple", "white", "blueviolet", "black"];

let currentColor=0
const title= document.getElementById("brandName");


function changeColor() {
    title.style.color= colors[currentColor];
    currentColor= (currentColor + 1) % colors.length;
};

setInterval(changeColor, 1000);

function message() {
    let response = prompt("Do you like dogs?");

if(response == "yes" || response == "Yes") {
    alert("Me too")
} else {
    alert("I hate you")
}

}


AOS.init();

link1.addEventListener("click",function() {
    info.innerHTML = `
    <div class="contents">
    <br>
    <h1>Facts</h1>
    <p>Did you know that when children grow up with dogs they become happier. Dogs are one of the most popular pets in the world. One third of households in the world have dogs. Also, they evolved from extinct wolves.</p>
    </div>
    `
});

link2.addEventListener("click",function() {
    info.innerHTML = `
    <div class="contents">
    <br>
    <h1>Dog Breeds</h1>
    <p>Some of the most popular dog breeds are golden retrivers, chihuahua, german shepherd and many more. Many other breeds that are popular could be huskys, mini golden doodles and poodles. Those are some of the most popular dog breeds. </p>
    </div>
    `
});

link3.addEventListener("click",function() {
    info.innerHTML = `
    <div class="contents">
    <br>
    <h1>Famous Dogs</h1>
    <p>On many social platforms like youtube, tiktok, instagram, snapchat, and more there are many "famous" dogs. Like Tucker Budzyn, Cedrick the chihuahua, Brodie the Dood, and many more. Many peoples dogs get famous because they do funny stuff or even dance.</p>
    </div>
    `
});

link4.addEventListener("click",function() {
    info.innerHTML = `
    <div class="contents">
    <br>
    <h1>Dogs</h1>
    <img src="https://pngimg.com/uploads/dog/dog_PNG50292.png" height=200> </img>
    <iframe width="300" height="205" src="https://www.youtube.com/embed/LlG9L8GQ1Gg?si=mtY-tZlB2NQs03HP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
    </div>
    `
});