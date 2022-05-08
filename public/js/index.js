var br = document.createElement("br"); 
function adicionar() {
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "submit");
    form.action = "/add";

    var nome = document.createElement("input");
    nome.setAttribute("type", "text");
    nome.setAttribute("name", "nome");
    nome.setAttribute("id", "btnEnviar")
    nome.setAttribute("placeholder", "Nome completo");

    var email = document.createElement("input");
    email.setAttribute("type", "text");
    email.setAttribute("name", "email");
    email.setAttribute("id", "id_email")
    email.setAttribute("placeholder", "E-mail");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Enviar");
    s.setAttribute("id", "btnEnviar")
    
    form.appendChild(nome); 
    form.appendChild(br.cloneNode()); 

    form.appendChild(email); 
    form.appendChild(br.cloneNode()); 
    form.appendChild(s); 

    document.getElementsByTagName("body")[0].appendChild(form);
}
function busca() {
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "submit");
    form.setAttribute("id", "form");
    form.action = "/busca";

    var id = document.createElement("input");
    id.setAttribute("type", "text");
    id.setAttribute("name", "pk");
    id.setAttribute("id", "id_usuario");
    id.setAttribute("placeholder", "id");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Enviar");
    s.setAttribute("id", "btnEnviar")

    form.appendChild(id);
    form.appendChild(s);  
    document.getElementsByTagName("body")[0].appendChild(form);
}
function excluir(){
    var form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", "submit");
    form.setAttribute("id", "form");
    form.action = "/deletar:id";

    document.getElementsByTagName("body")[0].appendChild(form);
}

function alterar(){
    var form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", "submit");
    form.setAttribute("id", "form");
    form.action = "/alt";

    var nome = document.createElement("input");
    nome.setAttribute("type", "text");
    nome.setAttribute("name", "nome");
    nome.setAttribute("id", "btnEnviar")
    nome.setAttribute("placeholder", "Nome completo");

    var email = document.createElement("input");
    email.setAttribute("type", "text");
    email.setAttribute("name", "email");
    email.setAttribute("id", "id_email")
    email.setAttribute("placeholder", "E-mail");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Enviar");
    s.setAttribute("id", "btnEnviar")
    
    form.appendChild(nome); 
    form.appendChild(br.cloneNode()); 

    form.appendChild(email); 
    form.appendChild(br.cloneNode()); 
    form.appendChild(s); 

    document.getElementsByTagName("body")[0].appendChild(form);
}



