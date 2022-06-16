document.addEventListener('click', e=> {
    const isDrpopdownButton = e.target.matches('[data-dropdown-button]')
    if (!isDrpopdownButton && e.target.closest('[data-dropdown') !==null)
    return

    let currentDefault
    if (isDrpopdownButton) {
        currentDefault = e.target.closest('[data-dropdown]')
        currentDefault.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown=>{
        if (dropdown === currentDefault) return
        dropdown.classList.remove('active')
    })
})