const imagList = ["poster1.png", "poster2.png","poster3.png","poster4.png", "poster5.png","poster6.png"];
const image = document.querySelector('.main_column_imgae');




const chosenImage = imagList[Math.floor(Math.random() * imagList.length)];
const bdImage = document.createElement('img');
bdImage.className = 'testkkk';
bdImage.src = `image/${chosenImage}`;
image.appendChild(bdImage);


document.querySelector('#todo-form').addEventListener('submit', background)
document.querySelector('.toDoList_contents_btn').addEventListener('click',background)
function background() {
    
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
  }