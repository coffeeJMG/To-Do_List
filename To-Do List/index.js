
let textCount=0;
let boxCount=0;
document.querySelector('.toDoList_contents_btn').addEventListener('click',function(){
  
    const newText_input = document.querySelector('.toDoList_contents_text').value;
    
    if(newText_input ==''){
        alert("넌 목표도없냐 이새끼야")
    }else{
        const newText = 
        `
        <div class="list_name">${newText_input}
        <input type="checkbox" class="content_checkbox" ><lable for="checkbox"></lable>
        </div>
        
        `;
        
        const newList = document.createElement('div');
        newList.innerHTML = newText;
        const newCheckbox = newList.querySelector('.content_checkbox');
        newCheckbox.addEventListener('click', function() {
            boxCount++;
            if(boxCount ===textCount && boxCount>0){

                document.getElementsByClassName('screen-header__message')[0].innerHTML="힘내라 내일보자"
            }
        });
        
        document.querySelector('.main_column_toDoList').appendChild(newList);
        textCount++;
        
         }

         
        
})


   