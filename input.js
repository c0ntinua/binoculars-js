function getNumColors() {
    global_colors = document.getElementById("colors").value;
    reset();
}
function setNumColors() {
    document.getElementById("colors").value = global_colors;
}
function getRowFilter() {
    row_filter_code = document.getElementById(`row_rule`).value;
    row_filter.cell = getRule(row_filter_code);
}
function getColFilter() {
    col_filter_code = document.getElementById(`col_rule`).value;
    col_filter.cell = getRule(col_filter_code);
}
function setRowFilter() {
    row_filter_code = getCode(row_filter.cell);
    document.getElementById(`row_rule`).value = row_filter_code;
}
function setColFilter() {
    col_filter_code = getCode(col_filter.cell);
    document.getElementById(`col_rule`).value = col_filter_code;
}
function getColor(n) {
    color[n] = document.getElementById(`color_${n}`).value;
}
function getColors() {
    for (let i = 0; i < output_colors; i++) {
        getColor(i);
    }

}

function setCols() {
    document.getElementById("cols").value = global_cols;
}
function setColor(n) {
    document.getElementById(`color_${n}`).value = color[n];
}
function setColors() {
    for (let i = 0; i < output_colors; i++) {
        setColor(i);
    }
}
function getRows() {
    global_rows = parseInt(document.getElementById("rows").value);
    pixel_height   = canvas.height/global_rows;
    reset();
}
function setRows() {
    document.getElementById("rows").value = global_rows;
}
function getDelay() {
    delay = parseInt(document.getElementById("delay").value);
    clearInterval(interval);
    if (!classic_mode) {
        interval = setInterval(perform_tiny_update,delay);
    } else {
        interval = setInterval(perform_tiny_update_classic,delay);
    };
}
function setDelay() {
    document.getElementById("delay").value = delay;
}

function getNeighbors() {
    neighbors = parseInt(document.getElementById("neighbors").value);
}

function setNeighbors() {
    document.getElementById("neighbors").value = neighbors;
}
function getCols() {
    global_cols = parseInt(document.getElementById("cols").value);
    pixel_width   = canvas.width/global_cols;
    reset();
}
function setCols() {
    document.getElementById("cols").value = global_cols;
}
function getUpdates() {
    tiny_updates = parseInt(document.getElementById("updates").value);
}
function setUpdates() {
    document.getElementById("updates").value = tiny_updates;
}

function getChoices(){
    getColors();
    getRows();
    getCols();
    getDelay();
    getUpdates();
    getRowFilter();
    
}

function setChoices(){
    setColors();
    setRows();
    setCols();
    setDelay();
    setUpdates();
    setRowFilter();
   
}

function reset() {
    filter = newFilter();
    temp_cell = new Array(global_rows * global_cols).fill(0);
    seedFilter(filter);
    seedAutomata(auto);

}
function bigReset() {
    auto = newAutomata();
}

function applyChoices() {
    getChoices();
    setChoices();
}

function getRule(code) {
    let filter_cell = [];
    let temp = 0;
    for (let i = 0; i < code_length; i++) {
        if (code.length <= i) {
            filter_cell.push(0);
        } else {
            if (parseInt(code[i]) == 1) filter_cell.push(1); 
            else filter_cell.push(0);
        }    
    }
    return filter_cell;
}
function getCode(rule) {
    let code = "";
    for (let i = 0; i < code_length; i++) {
        code = code.concat(rule[i].toString());
    }
    return code;
}