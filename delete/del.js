const inputForm = document.getElementById("comment_box");

inputForm.addEventListener('keyup', function(){
    const deleteBtn = document.getElementById("delete_btn");
    const inputText = inputForm.value;
    if (inputText === "delete"){
        deleteBtn.removeAttribute("disabled");
    }else{
        deleteBtn.setAttribute("disabled", true);
    }

});

/*

inputForm.addEventListener('change', function(){
    console.log(inputForm.value);

});

*/


inputForm.addEventListener('focus', function(){
    document.body.style.backgroundColor = "orange";

});

inputForm.addEventListener('blur', function(){
    document.body.style.backgroundColor = "pink";

});