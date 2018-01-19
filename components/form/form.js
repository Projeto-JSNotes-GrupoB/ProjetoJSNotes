var qtdItems = 0;

function adicionarItem(){
    var div = document.createElement('div');
    div.id = qtdItems++;
    div.className = "additional-items";
    
    var template = "";
    template +='<span class="additional-item1">Item '+qtdItems+'</span>';
    template +='<span class="additional-item2">';
    template +='<input class="item" type="text" name="item" id="itemAdditional" placeholder=" " >';
    template +='</span>';
    template +='<span class="additional-item3">';
    template +='<i onclick="removerItem('+document.getElementById(qtdItems)+')" class="fa fa-minus-square-o" aria-hidden="true"></i>';
    template +='</span>';

    div.innerHTML = template;

    console.log(template);
    // template +='';
    // O appendChild() é uma função que não sobrescresve como o inner.
    // https://www.w3schools.com/jsref/met_node_appendchild.asp
    document.getElementById("novo-item").appendChild(div);
}

function removerItem(removerElemento){
    var template = "";
    removerElemento = template;
}

