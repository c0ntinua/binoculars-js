let canvas = document.getElementById("canvas");
let pen = canvas.getContext("2d");
let global_rows = 7;
let global_cols = 29;
let neighbors = 4;
let code_length = 2**neighbors;
let pixel_height  = canvas.height/global_rows;
let pixel_width   = canvas.width/global_cols;
let global_colors = 2;
let output_colors = 2;
let color = ["#000000","#FFFFFF"];
let delay = 100;
let tiny_updates = 100;
let classic_mode = true;
let interval = 0;

let temp_cell = new Array(global_rows * global_cols).fill(0);
let auto = newAutomata();
let row_filter = newFilter();
row_filter.cell = getRule("1001111000011110");
let col_filter = newFilter();
col_filter.cell = getRule("1001111000011110");

