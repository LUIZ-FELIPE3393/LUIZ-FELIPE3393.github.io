const addButton = document.querySelector('#add-checklist');
const checklistTable = document.querySelector('#checklist-table');
const form = document.querySelector("#formChecklist");
const saveButtonWeb = document.getElementById('save-checklist-web');

let tupla_num = 1;

const fetchCookies = fetch('/cookies').then( r => r.json() ).then( data => {
    console.log('async');
    return data;
});

window.addEventListener('DOMContentLoaded', async function(e) {
    cookieDataJson = await fetchCookies;
    console.log(cookieDataJson.cookieDatadia.length);
    for(let i = 0; i < cookieDataJson.cookieDatadia.length - 1; i++) {
        newTuple();
    }
});

form.addEventListener('submit', function(e) {
    // Transforma valores de check nulo em 0
    for (let tuple of document.querySelectorAll("tr[name=tupla]")) {
        for (let checkbox of tuple.querySelectorAll("input[type=checkbox]")) {
            if (!checkbox.checked) {
                checkbox.value = 0;
            } else {
                for (let hiddenNode of tuple.querySelectorAll("input[type=hidden]")) {
                    if (hiddenNode.id == checkbox.id) {
                        console.log(hiddenNode);
                        hiddenNode.disabled = true;
                    }
                }
            }
        }
    }

});

function newTuple() {
    let tuple = document.createElement("tr");
    tuple.setAttribute("id", "tupla-" + tupla_num);
    tuple.setAttribute("name", "tupla");
    tupla_num++;
    tuple.innerHTML = tupleFormat; 
    checklistTable.append(tuple);
}

addButton.addEventListener('click', function(e) {
    newTuple();
});

const tupleFormat = `
<td class="td-data">
    <div class="form-check form-check-inline">
        <input class="form-text-input" type="text" name="datadia" id="datadia" required>
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="caixa" id="caixa" value="0">
        <input class="form-check-input" type="checkbox" name="caixa" id="caixa" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="galao" id="galao" value="0">
        <input class="form-check-input" type="checkbox" name="galao" id="galao" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline"> 
        <input type="hidden" name="vaso" id="vaso" value="0">
        <input class="form-check-input" type="checkbox" name="vaso" id="vaso" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="balde" id="balde" value="0">
        <input class="form-check-input" type="checkbox" name="balde" id="balde" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="garrafa" id="garrafa" value="0">
        <input class="form-check-input" type="checkbox" name="garrafa" id="garrafa" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="pneu" id="pneu" value="0">
        <input class="form-check-input" type="checkbox" name="pneu" id="pneu" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="piscina" id="piscina" value="0">
        <input class="form-check-input" type="checkbox" name="piscina" id="piscina" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="pocas" id="pocas" value="0">
        <input class="form-check-input" type="checkbox" name="pocas" id="pocas" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="pote" id="pote" value="0">
        <input class="form-check-input" type="checkbox" name="pote" id="pote" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="entulho" id="entulho" value="0">
        <input class="form-check-input" type="checkbox" name="entulho" id="entulho" value="1">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input type="hidden" name="calha" id="calha" value="0">
        <input class="form-check-input" type="checkbox" name="calha" id="calha" value="1">
    </div>
</td>`;
