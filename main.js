setChoices();
seedAutomata(auto,global_colors);
seedFilter(row_filter);
seedFilter(col_filter);
plotAutomata(auto);
let interval = setInterval(perform_tiny_update,delay);