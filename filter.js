function newFilter() {
    return {
        length : code_length,
        cell : new Array(code_length).fill(0),
    }
    
}
function seedFilter(filter) {
    for (c = 0 ; c < filter.length; c++) {
        filter.cell[c] = Math.floor(Math.random() * global_colors);
    }
}

function randomFilter() {
    seedFilter(row_filter);
    setRowFilter();
}

function valueAt(auto,row,col) {
    let exponent = 8;
    let running_total = 0;
    for (let row_mod = -1; row_mod <= 1; row_mod++) {
        for (let col_mod = -1; col_mod <= 1; col_mod++) {
            this_row = row + row_mod; this_col = col + col_mod;
            raw_value = auto.get(fixedIndex(this_row,global_rows), fixedIndex(this_col, global_cols));
            running_total += (global_colors**exponent) * raw_value;
            exponent -= 1;
        }
    }
    return running_total;
}


function colValue(auto,row,col) {
    let exponent = neighbors - 1;
    let running_total = 0;
    
    this_col = col;
    for (let row_mod = 0; row_mod < neighbors; row_mod++) {
            this_row = row + row_mod;
            raw_value = auto.get(fixedIndex(this_row, global_rows), fixedIndex(this_col, global_cols));
            running_total += (global_colors**exponent) * raw_value;
            exponent -= 1;
    }
    return running_total;
}

function rowValue(auto,row,col) {
    let exponent = neighbors - 1;
    let running_total = 0;
    let raw_value = 0;
    this_row = row;
    for (let col_mod = 0; col_mod < neighbors; col_mod++) {
            this_col = row + col_mod;
            raw_value = auto.get(fixedIndex(this_row, global_rows), fixedIndex(this_col, global_cols));
            running_total += (global_colors**exponent) * raw_value;
            exponent -= 1;
    }
    return running_total;
}


// function random_local_update( auto) {
//     row = Math.floor(Math.random() * global_rows);
//     col = Math.floor(Math.random() * global_cols);
//     if (Math.random() < 0.5) {
//         filter_index = rowValue(auto,row,col);
//         new_value = row_filter.cell[filter_index];
//     } else {
//         filter_index = colValue(auto,row,col);
//         new_value = col_filter.cell[filter_index];
//     }
//     auto.set(row,col,new_value);
// }
function classic_random_local_update( auto) {
    row = Math.floor(Math.random() * global_rows);
    col = Math.floor(Math.random() * global_cols);
    filter_index = rowValue(auto,row,col);
    new_value = row_filter.cell[filter_index];
    auto.set(row,col,new_value);
}

