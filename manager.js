function apply_current_filter() {
    applyFilterTo(auto);
    auto.cell = temp_cell;
    plotAutomata(auto);
}
function perform_tiny_update() {
    for (let i = 0; i < tiny_updates; i++) {
        random_local_update(auto);
    }
    plotAutomata(auto);
}