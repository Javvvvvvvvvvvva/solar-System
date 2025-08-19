alert('Welcome to Registration Web Page');
var button = document.createElement('button');
button.innerHTML = 'move to back';
document.body.appendChild(button);
button.style.marginTop = '50px';
button.style.marginTop = '100px';
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';
button.onclick = function() {
window.location.href = 'index.html';
};
//coment count
const inputBar = document.querySelector("#comment-input");
const rootDiv = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count'); 

//time stamp
function generateTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const wDate = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const time = year+'-'+month+'-'+wDate+' '+hour+':'+min+':'+sec;
    return time;

}

//make a uername
function generateUserName(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var makeUsername = '';
    for(let i=0; i<4;i++){
        let index = Math.floor(Math.random(10) * alphabet.length);
        makeUsername += alphabet[index];        
    }
    for(let j=0;j<4;j++){
        makeUsername += "*";
    }
    return makeUsername;    
}

function numberCount(event){
    console.log(event.target);
    if(event.target === voteUp){
        console.log("2");
    return voteUp.innerHTML++; 
    }else if(event.target === voteDown){
    return voteDown.innerHTML++; 
    }   
    
}

function deleteComments(event){    
    const btn = event.target;    
    const list = btn.parentNode.parentNode;//commentList
    rootDiv.removeChild(list);
    //main coument 
    if(mainCommentCount.innerHTML <='0'){
        mainCommentCount.innerHTML = 0;
    }else{
        mainCommentCount.innerHTML--;
    }
}
// showing the count
function showComment(comment){
    const userName = document.createElement('div');
    const inputValue = document.createElement('span');
    const showTime = document.createElement('div');
    const voteDiv = document.createElement('div');
    const countSpan = document.createElement('span')
    const voteUp = document.createElement('button');
    const voteDown = document.createElement('button');  
    const commentList = document.createElement('div'); 
    //delet button
    const delBtn = document.createElement('button');
    delBtn.className ="deleteComment";
    delBtn.innerHTML="delete";
    commentList.className = "eachComment";
    userName.className="name";
    inputValue.className="inputValue";
    showTime.className="time";
    voteDiv.className="voteDiv";
    //get suer name
    userName.innerHTML = generateUserName();    
    userName.appendChild(delBtn);  
    inputValue.innerText = comment;
    showTime.innerHTML = generateTime();
    countSpan.innerHTML=0;
    
    commentList.appendChild(userName);
    commentList.appendChild(inputValue);
    commentList.appendChild(showTime);
    commentList.appendChild(voteDiv);
    rootDiv.prepend(commentList);

    voteUp.addEventListener("click",numberCount);
    voteDown.addEventListener("click",numberCount);
    delBtn.addEventListener("click",deleteComments);
    console.dir(rootDiv);

}

//버튼만들기+입력값 전달
function pressBtn(){ 
   const currentVal = inputBar.value;
   
   if(!currentVal.length){
      alert("type something!!");
   }else{
      showComment(currentVal);  
      mainCommentCount.innerHTML++;
      inputBar.value ='';
   }
}

btn.onclick = pressBtn;
