window.onload = function() {
    /*getElements entrega arreglo y
    solo queremos el primero de sus elementos que retorna porque
    sabemos que existe al menos uno*/
    var sendButton = document.getElementsByName("send")[0];
    var thinkInput = document.getElementsByName("message")[0];
    var timeLine = document.getElementsByName("timeLine")[0];

    /*Creando contador de caracteres
    thinkInput.onkeydown = function() {
      var text = document.getElementsByName("message")[0].value;
      var textCount = text.split(" ");
      var finalText = textCount.length;
      var numbers = document.createElement("p");
      var numbersP = document.createTextNode(finalText);
      count.appendChild(numbers);
      numbers.appendChild(numbersP);
      document.getElementById("count").appendChild(numbers);
    }*/

    /*Desabilitar boton si ingresan campos vacios o más de 140 caracteres*/
    thinkInput.onkeyup = function (){
      if (thinkInput.value == "" || thinkInput.value > "140") {
          sendButton.disabled = true;
      /*si no se cumple la condición anterior se crea div que contendrá los tweets*/
      } else {
        sendButton.disabled = false;
      }
    }

    /*función para enviar tweet por medio de un boton*/
    sendButton.onclick = function() {
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "tuit"
            nameSpan.textContent = "Natu Espinoza ";
            nameSpan.style.fontWeight = "bold";
            nameSpan.style.fontFamily = "Fredoka One";
            dateSpan.textContent = new Date();
            dateSpan.style.fontSize = "12px";
            tuitP.textContent = thinkInput.value;
            tuitP.style.background = "background #FFF";

            /*Insertando los nodos de cada tweet, cada nuevo tweet es puesto antes que el anterior*/
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);

        }
      }
