const addButton = document.querySelector('#add-checklist');
const checklistTable = document.querySelector('#checklist-table');

let tupla_num = 1;

addButton.addEventListener('click', function(e) {
    let tuple = document.createElement("tr");
    tuple.setAttribute("id", "tupla-" + tupla_num);
    tupla_num++;
    tuple.innerHTML = tupleFormat; 
    checklistTable.append(tuple);
    console.log(e);
});

const tupleFormat = `
<td class="td-data">
    <div class="form-check form-check-inline">
        <input class="form-text-input" type="text" name="datadia" id="datadia">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="caixa" id="caixa" value="v-caixa">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="galao" id="galao" value="v-galao">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline"> 
        <input class="form-check-input" type="checkbox" name="vaso" id="vaso" value="v-vaso">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="balde" id="balde" value="v-balde">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="garrafa" id="garrafa" value="v-garrafa">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="pneu" id="pneu" value="v-pneu">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="piscina" id="piscina" value="v-piscina">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="pocas" id="pocas" value="v-pocas">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="pote" id="pote" value="v-pote">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="entulho" id="entulho" value="v-entulho">
    </div>
</td>
<td class="td-check">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="calha" id="calha" value="v-calha">
    </div>
</td>`;
