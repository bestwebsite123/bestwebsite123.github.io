const link1= document.getElementById("topic1");
const link2= document.getElementById("topic2");
const link3= document.getElementById("topic3");
const link4= document.getElementById("info");

link1.addEventListener("click",function() {
    info.innerHTML = `
    <h1>Facts</h1>
    <p>Did you know that when children grow up with dogs they become happier. Dogs are one of the most popular pets in the world. One third of households in the world have dogs. Also, they evolved from extinct wolves.</p>
    `
});

link2.addEventListener("click",function() {
    info.innerHTML = `
    <h1>Dog Breeds</h1>
    <p>Some of the most popular dog breeds are golden retrivers, chihuahua, german shepherd and many more. Many other breeds that are popular could be huskys, mini golden doodles and poodles. Those are some of the most popular dog breeds. </p>
    `
});

link3.addEventListener("click",function() {
    info.innerHTML = `
    <h1>Famous Dogs</h1>
    <p>On many social platforms like youtube, tiktok, instagram, snapchat, and more there are many "famous" dogs. Like Tucker Budzyn, Cedrick the chihuahua, Brodie the Dood, and many more. Many peoples dogs get famous because they do funny stuff or even dance.</p>
    `
});