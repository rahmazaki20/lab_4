
// question_1

let randomNumber; // Declare randomNumber globally
const images = [
    './japan-background-digital-art_23-2151546198.avif',
    './beautiful-anime-character-cartoon-scene_23-2151035176.avif',
    './backpacker-7628303_1280.webp',
    './ai-art-gamer-computer-pc-gaming-hd-wallpaper-preview.jpg',
];


var defaultImage = './anime-girl-watching-sunset-3d-illustration_717906-1411.avif';

function clickHandler(event) {
    console.log(event.offsetX);  

    randomNumber = Math.floor(Math.random() * images.length);

   
    var imgElement = document.getElementById('img');
    imgElement.src = images[randomNumber];
}

function resetImage() {
    
     imgElement = document.getElementById('img');
    imgElement.src = defaultImage;  
}


// question_2




function showInfo(itemId) {
   
    let items = document.querySelectorAll('p');
    items.forEach(item => {
        item.classList.add('none');
        item.classList.remove('block');
    });

   
    let item = document.getElementById(itemId);
    item.classList.add('block');
    item.classList.remove('none');
}
