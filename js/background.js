<<<<<<< HEAD
const imagList = ["poster1.png", "poster2.png","poster3.png","poster4.png", "poster5.png","poster6.png"];
const image = document.querySelector('.main_column_imgae');




const chosenImage = imagList[Math.floor(Math.random() * imagList.length)];
const bdImage = document.createElement('img');
bdImage.className = 'testkkk';
bdImage.src = `image/${chosenImage}`;
image.appendChild(bdImage);


document.querySelector('#todo-form').addEventListener('submit', background)
function background() {
    const imagList = ["poster1.png", "poster2.png"];
    const image = document.querySelector('.main_column_imgae');
    
    
    const existingImage = image.querySelector('img');
    if (existingImage) {
      image.removeChild(existingImage);
    }
  
    const chosenImage = imagList[Math.floor(Math.random() * imagList.length)];
    const bdImage = document.createElement('img');
    bdImage.className = 'testkkk';
    bdImage.src = `image/${chosenImage}`;
    image.appendChild(bdImage);
=======
const imagList = ["poster1.png", "poster2.png","poster3.png","poster4.png", "poster5.png","poster6.png"];
const image = document.querySelector('.main_column_imgae');




const chosenImage = imagList[Math.floor(Math.random() * imagList.length)];
const bdImage = document.createElement('img');
bdImage.className = 'testkkk';
bdImage.src = `image/${chosenImage}`;
image.appendChild(bdImage);


document.querySelector('#todo-form').addEventListener('submit', background)
function background() {
    const imagList = ["poster1.png", "poster2.png"];
    const image = document.querySelector('.main_column_imgae');
    
    
    const existingImage = image.querySelector('img');
    if (existingImage) {
      image.removeChild(existingImage);
    }
  
    const chosenImage = imagList[Math.floor(Math.random() * imagList.length)];
    const bdImage = document.createElement('img');
    bdImage.className = 'testkkk';
    bdImage.src = `image/${chosenImage}`;
    image.appendChild(bdImage);
>>>>>>> 4401234ba11e19e6431fb515006bdeec01ca3e78
  }