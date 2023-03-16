
document.querySelector('.toDoList_contents_btn').addEventListener('click',function(){
 
    const newList = document.querySelector('.toDoList_contents_text').value;
    
    if(newList ==''){
        alert("넌 목표도없냐 이새끼야")
    }else{
        const newText = 
        `
        <div class="list_name">${newList}
        <input type="checkbox" class="content_checkbox"><lable for="checkbox"></lable>
        </div>
        
        `;
        
        document.querySelector('.main_column_toDoList').insertAdjacentHTML('beforeend',newText)
    }


    

})




// 지금 문제점 배운게 머릿속에서 정리가 X
// 그래서 순서대로 코드짜는게 아니고 아 이거 해야될 것 같은데 하고 있음
// 순서를 먼저 정리하자.


// 1. 버튼 클릭 시 이벤트 작동
// 2. input 텍스트의 입력값을 저장
// 3. div 생성하고 내부 html 추가 ? 존나어려워 
//  걍 뭘해야되는지 모르네 이러니 못하지 
