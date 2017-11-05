window.onload = function() {
    /*getElements... entrega arreglo y
    solo queremos el primero de sus elementos que retorna porque
    sabemos que existe al menos uno*/
    var sendButton = document.getElementsByName("send")[0];
    var thinkInput = document.getElementsByName("message")[0];
    var timeLine = document.getElementsByName("timeLine")[0];
    sendButton.onclick = function() {
        if (thinkInput.value == "") {
            alert("Ingresa un mensaje, por favor");
        } else {
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "tuit"
            nameSpan.textContent = "Natu Espinoza ";
            dateSpan.textContent = new Date();
            dateSpan.style.fontSize = "12px";
            tuitP.textContent = thinkInput.value;
            tuitP.style.background = "background #FFF";
            nameSpan.style.fontWeight = "bold";
            nameSpan.style.fontFamily = "Fredoka One";

            /* Usamos timeLine.children para obtener los hijos
             del nodo, este siempre es un arreglo, aunque venga
             vacío.
             Como insertBefore recibe dos parámetros y
             el segundo es opcional, si, el primer nodo no existe en
             el arreglo children, entonces nos dará undefined. Y eso hará
             que insertBefore agregue el nodo al último */
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
        }
    }
}
