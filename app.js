window.onload = function() {
  /*getElements entrega arreglo y
  solo queremos el primero de sus elementos que retorna porque
  sabemos que existe al menos uno*/
  var sendButton = document.getElementsByName("send")[0];
  var thinkInput = document.getElementsByName("message")[0];
  var timeLine = document.getElementsByName("timeLine")[0];

  /*Creando contador de caracteres*/
  thinkInput.onkeyup = function() {
    document.getElementById('count').innerHTML = (140 - this.value.length);
    if (thinkInput.value.length >= 120 && thinkInput.value.length < 130) {
      document.getElementById('count').className = 'green';
    }
    if (thinkInput.value.length >= 130) {
      document.getElementById('count').className = 'red';
    }
  }

  /*Tamaño de textarea*/
  var textarea = document.getElementsByName("message");
  var limit = 200;
  textarea.oninput = function() {
    textarea.style.height = "";
    textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
  }

  /*Desabilitar boton si ingresan campos vacios o más de 140 caracteres*/
  thinkInput.oninput = function() {
    if (thinkInput.value == "" || thinkInput.value.length > 140) {
      sendButton.disabled = true;
      /*si no se cumple la condición se habilita boton*/
    } else {
      sendButton.disabled = false;
    }
  }

  /*función para enviar tweet por medio de un boton*/
  sendButton.onclick = function() {
    if (thinkInput.value == "" || thinkInput.value.length > 140) {
      sendButton.disabled = true;
      /*si no se cumple la condición se habilita boton*/
    } else {
      sendButton.disabled = false;
      //volver contador a 140
      var counter = document.getElementById('count');
      counter.innerHTML = 140;
      //agregando div con tweet
      var tweetDiv = document.createElement("div");
      var nameSpan = document.createElement("span");
      var dateSpan = document.createElement("span");
      var tweetP = document.createElement("p");
      tweetDiv.appendChild(nameSpan);
      tweetDiv.appendChild(dateSpan);
      tweetDiv.appendChild(tweetP);
      tweetDiv.className = "tweet"
      nameSpan.textContent = "Natu Espinoza ";
      nameSpan.style.fontWeight = "bold";
      nameSpan.style.fontFamily = "Fredoka One";
      dateSpan.textContent = new Date();
      dateSpan.style.fontSize = "12px";
      tweetP.textContent = thinkInput.value;
      tweetP.style.background = "background #FFF";
      //Limpiando el textarea luego de enviar el tweet
      document.getElementsByName("message")[0].value = "";

      /*Insertando los nodos de cada tweet, cada nuevo tweet es puesto antes que el anterior*/
      timeLine.insertBefore(tweetDiv, timeLine.children[0]);
    }
  }
}
