let textCount=0;
let boxCount=0;

document.querySelector('.toDoList_contents_btn').addEventListener('click',addList)

    

function addList(){


    const newText_input = document.querySelector('.toDoList_contents_text').value;
    
   if(newText_input ==''){
        alert("넌 목표도없냐 이새끼야")
    }else{
        
        const new_contents = document.createElement('div')
        new_contents.className='new_toDoList_contents';

        const newText = 
        `
        <input type="text" value=" ${newText_input}"  class="new_contents_text" >
        <input type="checkbox" class="content_checkbox" >
        `;

        const newList = document.createElement('div');
        newList.className='new_toDoList_contents';
        newList.innerHTML = newText;

        
        const newBtn =document.createElement('button');
        newBtn.className="contents_deleteBtn";
        newBtn.innerHTML='삭제';
        
        newBtn.addEventListener('click',delList)
        
        new_contents.appendChild(newList);
        new_contents.appendChild(newBtn);

        document.querySelector('.main_column_toDoList').appendChild(new_contents)


        textCount++;

       

        const newCheckbox = newList.querySelector('.content_checkbox');
        newCheckbox.addEventListener('click', checkBox );
    
            }
         
        }

    function delList(event){

         const target = event.target.parentElement;
         target.remove();
         console.log(target)
     }

     function checkBox(){

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
        
     }

