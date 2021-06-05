var count = 0;
    
function addForm(){
  var addedFormDiv = document.getElementById("addedFormDiv");

  var str = "";
  str+="<br>Label : "+count+" <input type='text' name='labelName_"+count+"'> &emsp; ";
  str+="Class Number : "+count+" <input type='text' name='labelNumber_"+count+"'>";
  // 추가할 폼(에 들어갈 HTML)
  
  var addedDiv = document.createElement("div"); // 폼 생성
  addedDiv.id = "added_"+count; // 폼 Div에 ID 부여 (삭제를 위해)
  addedDiv.innerHTML  = str; // 폼 Div안에 HTML삽입
  addedFormDiv.appendChild(addedDiv); // 삽입할 DIV에 생성한 폼 삽입

  count++;
  document.baseForm.count.value=count;
  // 다음 페이지에 몇개의 폼을 넘기는지 전달하기 위해 히든 폼에 카운트 저장
}

function delForm(){
  var addedFormDiv = document.getElementById("addedFormDiv");
  
  if(count >1){ // 현재 폼이 두개 이상이면
    var addedDiv = document.getElementById("added_"+(--count));
    // 마지막으로 생성된 폼의 ID를 통해 Div객체를 가져옴
    addedFormDiv.removeChild(addedDiv); // 폼 삭제 
  }else{ // 마지막 폼만 남아있다면
    document.baseForm.reset(); // 폼 내용 삭제
  }
}