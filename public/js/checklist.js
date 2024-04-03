const addButton = document.querySelector("#add-checklist");
const checklistTable = document.querySelector("#checklist-table");
const form = document.querySelector("#formChecklist");
const saveButtonWeb = document.getElementById("save-checklist-web");
const saveButtonDevice = document.getElementById("save-checklist-device");
const loadButton = document.getElementById("load-checklist");

let tupla_num = 0;

const saveFormOnWeb = (e) => {
    for (let tuple of document.querySelectorAll("tr[name=tupla]")) {
        console.log(tuple);
        for (let checkbox of tuple.querySelectorAll("input[type=checkbox]")) {
            console.log(checkbox);
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
}

const fetchCookies = fetch("/cookies")
  .then((r) => r.json())
  .then((data) => {
    return data;
  });

window.addEventListener("DOMContentLoaded", async function (e) {
    const cookieDataJson = await fetchCookies;
    const checklistTableContent = checklistTable.querySelector("#table-content");
    let cookieLength = 0;

    if (typeof(cookieDataJson.cookieDatadia) === "undefined") return;

    if (typeof(cookieDataJson.cookieDatadia) === "string") {
        cookieLength = 1;
    } else {
        cookieLength = cookieDataJson.cookieDatadia.length;
    }

    for (let i = 0; i < cookieLength; i++) {
        let tuple = document.createElement("tr");
        tuple.setAttribute("id", "tupla-" + tupla_num);
        tuple.setAttribute("name", "tupla");
        tupla_num++;
        tuple.innerHTML = tupleFormat;

        if (typeof(cookieDataJson.cookieDatadia) === "string") {
            tuple.querySelector("#datadia").value = cookieDataJson.cookieDatadia;
        } else {
            tuple.querySelector("#datadia").value = cookieDataJson.cookieDatadia[i];
        }
        
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

        checklistTableContent.append(tuple);
    }
});

form.addEventListener("submit", saveFormOnWeb);

saveButtonWeb.addEventListener("click", (e) => {
    form.setAttribute("action", "/save-checklist-web")
});

saveButtonDevice.addEventListener("click", (e) => {
    form.setAttribute("action", "/save-checklist-device")
});

loadButton.addEventListener("click", async function (e) {
  location.replace("/load");
});

addButton.addEventListener("click", function (e) {
  let tuple = document.createElement("tr");
  const checklistTableContent = checklistTable.querySelector("#table-content");
  tuple.setAttribute("id", "tupla-" + tupla_num);
  tuple.setAttribute("name", "tupla");
  tuple.setAttribute("class", "align-center");
  tupla_num++;
  tuple.innerHTML = tupleFormat;
  checklistTableContent.append(tuple);
});

const tupleFormat = `
<th class="td-data text-center">
    <div class="form-check">
        <input class="form-control" type="date" name="datadia" id="datadia" required>
    </div>
</th>
<td class="td-check text-center">
    <div class="form-check checkbox-lg">
        <input type="hidden" name="caixa" id="caixaHidden" value="0">
        <input class="form-check-input" type="checkbox" name="caixa" id="caixa" value="1">
    </div>
</td>
<td class="td-check text-center">
    <div class="form-check checkbox-lg">
        <input type="hidden" name="galao" id="galaoHidden" value="0">
        <input class="form-check-input" type="checkbox" name="galao" id="galao" value="1">
    </div>
</td>
<td class="td-check text-center">
    <div class="form-check checkbox-lg">
        <input type="hidden" name="vaso" id="vasoHidden" value="0">
        <input class="form-check-input" type="checkbox" name="vaso" id="vaso" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check checkbox-lg">
        <input type="hidden" name="balde" id="baldeHidden" value="0">
        <input class="form-check-input" type="checkbox" name="balde" id="balde" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check checkbox-lg">
        <input type="hidden" name="garrafa" id="garrafaHidden" value="0">
        <input class="form-check-input" type="checkbox" name="garrafa" id="garrafa" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check checkbox-lg">
        <input type="hidden" name="pneu" id="pneuHidden" value="0">
        <input class="form-check-input" type="checkbox" name="pneu" id="pneu" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check checkbox-lg">
        <input type="hidden" name="piscina" id="piscinaHidden" value="0">
        <input class="form-check-input" type="checkbox" name="piscina" id="piscina" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check checkbox-lg">
        <input type="hidden" name="pocas" id="pocasHidden" value="0">
        <input class="form-check-input" type="checkbox" name="pocas" id="pocas" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check checkbox-lg">
        <input type="hidden" name="pote" id="poteHidden" value="0">
        <input class="form-check-input" type="checkbox" name="pote" id="pote" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check checkbox-lg">
        <input type="hidden" name="entulho" id="entulhoHidden" value="0">
        <input class="form-check-input" type="checkbox" name="entulho" id="entulho" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check checkbox-lg">
        <input type="hidden" name="calha" id="calhaHidden" value="0">
        <input class="form-check-input" type="checkbox" name="calha" id="calha" value="1">
    </div>
</td>`;
