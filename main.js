setChoices();
seedAutomata(auto,global_colors);
seedFilter(row_filter);
seedFilter(col_filter);
plotAutomata(auto);
//setInterval(apply_current_filter,delay);
let interval = setInterval(perform_tiny_update,delay);