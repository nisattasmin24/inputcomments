//click button

const commentBtn = document.getElementById("comment_btn");
commentBtn.addEventListener('click', function(){

    const inputBox = document.getElementById("input_box");
    const recentComments = inputBox.value;
    const mainSection = document.getElementById("comments");
    const p = document.createElement("p");
    p.innerText = recentComments;
    mainSection.appendChild(p);
    inputBox.value = "";
    

    
});

