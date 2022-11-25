setChoices();
seedAutomata(auto,global_colors);
seedFilter(row_filter);
seedFilter(col_filter);
plotAutomata(auto);
//interval = setInterval(perform_tiny_update_classic,delay);

if (!classic_mode) {
    interval = setInterval(perform_tiny_update,delay);
} else {
    interval = setInterval(perform_tiny_update_classic,delay);
};
