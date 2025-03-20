export function displayInfos(btn) {
    btn.classList.add("hidden");
    const project = btn.closest(".inner");
    const reductionBtnEl = project?.querySelector("#reduction-btn");

    const btnToDisplayEl = project?.querySelector(
        "#btn-to-display"
    ) as HTMLElement;
    // btnToDisplayEl?.classList.remove('hidden-part')
    const presentationEl = project?.querySelector(".presentation-mini");
    presentationEl?.classList.add("clicked");
    btnToDisplayEl?.classList.add("visible", "flex", "flex-col");
}
