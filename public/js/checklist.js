const addButton = document.querySelector("#add-checklist");
const checklistTable = document.querySelector("#checklist-table");
const form = document.querySelector("#formChecklist");
const saveButtonWeb = document.getElementById("save-checklist-web");
const loadButton = document.getElementById("load-checklist");
let cookieDataJson;

let tupla_num = 0;

const fetchCookies = fetch("/cookies")
  .then((r) => r.json())
  .then((data) => {
    return data;
  });

window.addEventListener("DOMContentLoaded", async function (e) {
    cookieDataJson = await fetchCookies;
    if(cookieDataJson.cookieDatadia == "undefined")
        return;
    for (let i = 0; i < cookieDataJson.cookieDatadia.length; i++) {
        let tuple = document.createElement("tr");
        tuple.setAttribute("id", "tupla-" + tupla_num);
        tuple.setAttribute("name", "tupla");
        tupla_num++;
        tuple.innerHTML = tupleFormat;
        tuple.querySelector("#datadia").value = cookieDataJson.cookieDatadia[i];

        if (cookieDataJson.cookieCaixa[i] === "1")
        tuple.querySelector("#caixa").checked = true;
        if (cookieDataJson.cookieGalao[i] === "1")
        tuple.querySelector("#galao").checked = true;
        if (cookieDataJson.cookieVaso[i] === "1")
        tuple.querySelector("#vaso").checked = true;
        if (cookieDataJson.cookieBalde[i] === "1")
        tuple.querySelector("#balde").checked = true;
        if (cookieDataJson.cookiePocas[i] === "1")
        tuple.querySelector("#pocas").checked = true;
        if (cookieDataJson.cookieGarrafa[i] === "1")
        tuple.querySelector("#garrafa").checked = true;
        if (cookieDataJson.cookiePneu[i] === "1")
        tuple.querySelector("#pneu").checked = true;
        if (cookieDataJson.cookiePiscina[i] === "1")
        tuple.querySelector("#piscina").checked = true;
        if (cookieDataJson.cookiePote[i] === "1")
        tuple.querySelector("#pote").checked = true;
        if (cookieDataJson.cookieEntulho[i] === "1")
        tuple.querySelector("#entulho").checked = true;
        if (cookieDataJson.cookieCalha[i] === "1")
        tuple.querySelector("#calha").checked = true;

        checklistTable.append(tuple);
    }
});

form.addEventListener("submit", function (e) {
  // Transforma valores de check nulo em 0

    for (let tuple of document.querySelectorAll("tr[name=tupla]")) {
        for (let checkbox of tuple.querySelectorAll("input[type=checkbox]")) {
            console.log(tuple);
            if (!checkbox.checked) {
                checkbox.value = 0;
            } else {
                for (let hiddenNode of tuple.querySelectorAll("input[type=hidden]")) {
                    if (hiddenNode.name == checkbox.name) {
                        console.log(hiddenNode);
                        hiddenNode.disabled = true;
                    }
                }
            }
        }
    }
});

loadButton.addEventListener("click", async function (e) {
    location.replace("/load");
});

addButton.addEventListener("click", function (e) {
  let tuple = document.createElement("tr");
  tuple.setAttribute("id", "tupla-" + tupla_num);
  tuple.setAttribute("name", "tupla");
  tupla_num++;
  tuple.innerHTML = tupleFormat;
  checklistTable.append(tuple);
});

const tupleFormat = `
<td class="td-data">
    <div class="form-check form-check-inline">
        <input class="form-text-input" type="text" name="datadia" id="datadia" required>
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="caixa" id="caixaHidden" value="0">
        <input class="form-check-input" type="checkbox" name="caixa" id="caixa" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="galao" id="galaoHidden" value="0">
        <input class="form-check-input" type="checkbox" name="galao" id="galao" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="vaso" id="vasoHidden" value="0">
        <input class="form-check-input" type="checkbox" name="vaso" id="vaso" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="balde" id="baldeHidden" value="0">
        <input class="form-check-input" type="checkbox" name="balde" id="balde" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="garrafa" id="garrafaHidden" value="0">
        <input class="form-check-input" type="checkbox" name="garrafa" id="garrafa" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="pneu" id="pneuHidden" value="0">
        <input class="form-check-input" type="checkbox" name="pneu" id="pneu" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="piscina" id="piscinaHidden" value="0">
        <input class="form-check-input" type="checkbox" name="piscina" id="piscina" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="pocas" id="pocasHidden" value="0">
        <input class="form-check-input" type="checkbox" name="pocas" id="pocas" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="pote" id="poteHidden" value="0">
        <input class="form-check-input" type="checkbox" name="pote" id="pote" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="entulho" id="entulhoHidden" value="0">
        <input class="form-check-input" type="checkbox" name="entulho" id="entulho" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="calha" id="calhaHidden" value="0">
        <input class="form-check-input" type="checkbox" name="calha" id="calha" value="1">
    </div>
</td>`;
