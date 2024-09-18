let mainContainerE1 = document.getElementById('mainContainer');
let butE1 = document.getElementById('but');


function calling(i) {
    let imageContainerE1 = document.getElementById('imageContainer');
    let imgE1 = document.createElement('img');
    imgE1.classList.add('style1');
    imgE1.src = `https://picsum.photos/300?random=${i}`;
    imgE1.alt = 'RandomImage';
    imageContainerE1.appendChild(imgE1);
}


for (let i = 0; i <= 6; i++) {
    calling(i);
}

butE1.onclick = function() {
    for (let i = 0; i <= 10; i++) {
        calling(i);
    }
};
