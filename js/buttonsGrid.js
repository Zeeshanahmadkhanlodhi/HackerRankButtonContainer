let block = document.getElementsByTagName("div")[0];
for (let i = 1 ;i <= 9 ;i++) {
    var btn = document.createElement("button");
    btn.innerHTML = i;
    var idname = "btn"
    idname += i;
    btn.id = idname;
    block.appendChild(btn);
   
        
    }
btn5.onclick = function(){
    [btn1.innerHTML,
        btn2.innerHTML,
        btn3.innerHTML,
        btn4.innerHTML,
        btn6.innerHTML,
        btn7.innerHTML,
        btn8.innerHTML,
        btn9.innerHTML] =
           [btn4.innerHTML,
            btn1.innerHTML,
            btn2.innerHTML,
            btn7.innerHTML,
            btn3.innerHTML,
            btn8.innerHTML,
            btn9.innerHTML,
            btn6.innerHTML]
}


