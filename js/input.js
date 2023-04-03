

    const toDoInput = document.querySelector('.toDoList_contents_text')




    document.querySelector('.toDoList_contents_btn').addEventListener('click',executeEvent)
    document.querySelector('#todo-form').addEventListener('submit', executeEvent)

    function executeEvent(event){
        event.preventDefault();
        const newText_input = toDoInput.value;
        toDoInput.value = "";
        const newTextObj ={
            text:newText_input,
            id:Date.now(),
        }
        
        toDos.push(newTextObj)
        addList(newTextObj)
    
        saveToDos();    
    }

        
    let toDos=[];

    function saveToDos(){
        localStorage.setItem("todos", JSON.stringify(toDos));
    }

    const savedToDos=localStorage.getItem("todos");

    if(savedToDos!==null){
        const parsedToDos = JSON.parse(savedToDos);
        toDos=parsedToDos;
        parsedToDos.forEach(addList);
    }

    
    function delList(event){

        const target = event.target.parentElement;
    
        target.remove();
        toDos=toDos.filter(toDo => toDo.id!== parseInt(target.id));
        saveToDos();   
        
    }

    function addList(newText_input){
       
        if(newText_input.text ===''){
            alert('목표를 입력해주세요')
        }else{
            
            const new_contents = document.createElement('div')
            new_contents.className='new_toDoList_contents';
            new_contents.id=newText_input.id

            const newInput =document.createElement('input');
            newInput.type ="text"
            newInput.className ="new_contents_text"
            newInput.value= newText_input.text;

            const newBox = document.createElement('input');
            newBox.type="checkbox"
            newBox.className="content_checkbox"


            const newBtn =document.createElement('button');
            newBtn.className="contents_deleteBtn";
            newBtn.innerHTML='삭제';
            
            newBtn.addEventListener('click',delList)
            
            new_contents.appendChild(newInput);
            new_contents.appendChild(newBox);
            new_contents.appendChild(newBtn);

            document.querySelector('.main_column_toDoList').appendChild(new_contents)


          

        

            const newCheckbox = new_contents.querySelector('.content_checkbox');
            newCheckbox.addEventListener('click', checkBox );
        
        }
            
    }

        
    function checkBox(){

       
        const checkList = this.parentNode.querySelector('.new_contents_text');
        
        if(checkList.style.textDecoration === 'line-through'){
            checkList.style.textDecoration = 'none'
        }else{
            checkList.style.textDecoration = 'line-through'
        }
        
            
        }


