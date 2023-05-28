var formCount = 1; // contador de formulários

// Função para criar uma nova div forms-div glasses
function createNewForm() {
  formCount++; // incrementa o contador de formulários

  // Cria a nova div
  var newDiv = document.createElement("div");
  newDiv.className = "forms-div glasses";

  // Define o conteúdo da nova div
  newDiv.innerHTML = `
    <p>Apiário/Meliponário ${formCount}</p><br>
    <label for="">Nome do Apiário/Meliponário</label>
    <input type="text" name="glasses-client-name" id="glasses-client-name" placeholder=""><br>
    <label for="">Meliponário ou Apiário?</label>
    <select name="" id="">
      <option value="">Meliponário</option>
      <option value="">Apiário</option>
    </select>
    <label for="">Geolocalizar:</label>
    <button id="btn-add-medic">clique aqui</button>
    <label for="">Especie de abelha:</label>
    <select name="lens-select" id="lens-select">
      <option value="0">Especie 1</option>
      <option value="1">Especie 2</option>
      <option value="2">Especie 3</option>
      <option value="3">Especie 4</option>
      <option value="4">Especie 5</option>
    </select>
    <label for="">Quantidade de abelhas:(em média)</label>
    <input type="number" id="frames" placeholder="">
    <label for="">Produção Atual:</label>
    <input type="number" id="frames" placeholder="em Kg">
    <label for="">Data do Registro:</label>
    <input type="datetime-local" id="frames-value" placeholder="">
    <textarea style="border:0; border-radius: 5px; max-width: 100%;" type="text" id="obs-glasses-label" placeholder="OBSERVAÇÃO"></textarea>
  `;

  // Insere a nova div no documento
  var addButton = document.getElementById("btn-add-glass-label");
  addButton.parentNode.insertBefore(newDiv, addButton);
}

// Adiciona um evento de clique ao botão
var addButton = document.getElementById("btn-add-glass-label");
addButton.addEventListener("click", createNewForm);
