let textCount=0;
let boxCount=0;



document.querySelector('.toDoList_contents_btn').addEventListener('click',function(){

   
    const newText_input = document.querySelector('.toDoList_contents_text').value;
    
   
    if(newText_input ==''){
        alert("넌 목표도없냐 이새끼야")
    }else{
        
        const newText = 
        `
        <input type="text" value=" ${newText_input}"  class="new_contents_text" >
        <input type="checkbox" class="content_checkbox" ><lable for="checkbox"></lable>
        <input type="submit" class="contents_deleteBtn" value="삭제">
        </div>
        `;
        const newList = document.createElement('div');
        newList.className='new_toDoList_contents';
        newList.innerHTML = newText;
        
        
        const newCheckbox = newList.querySelector('.content_checkbox');
        newCheckbox.addEventListener('click', function() {

            
            boxCount++;
            if(boxCount ===textCount && boxCount>0){

                document.getElementsByClassName('screen-header__message')[0].innerHTML="힘내라 내일보자"
            }
            const checkList = this.parentNode.querySelector('.new_contents_text');
            if(checkList.style.textDecoration === 'line-through'){
                checkList.style.textDecoration = 'none'
            }else{
                checkList.style.textDecoration = 'line-through'
            }
          
        });

        document.querySelector('.main_column_toDoList').appendChild(newList);
        textCount++;

         }
         
      

   
        
})

