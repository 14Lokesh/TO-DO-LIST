let btn= document.getElementById("btn");
let inputfield= document.getElementById("inputfield");
let submit= document.getElementById("submit");

btn.addEventListener('click',function(){
    var para= document.createElement('p');
    para.classList.add('paragraph-styling');
    para.innerText=inputfield.value;
    submit.appendChild(para);
    inputfield.value="";

    para.addEventListener('click',function(){
        para.style.textDecoration= "line-through";

    })
    para.addEventListener('dblclick',function(){
       submit.removeChild(para);

    })
})
