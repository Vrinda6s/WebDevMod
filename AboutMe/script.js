function toggleSection(sectionId) {
    const section = document.querySelector(`#${sectionId} .collapsible-content`);
    if (section.classList.contains('collapsed')) {
        section.classList.remove('collapsed');
    } else {
        section.classList.add('collapsed');
    }
}
