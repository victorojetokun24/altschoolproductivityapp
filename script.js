const visToggle = document.querySelector('[data-visible]')
visToggle.onclick = (e) => {
    e.target.dataset.visible = e.target.dataset.visible !== 'false' ? false : true
    const target = document.querySelector(e.target.dataset.target)
    if (target) {
        if (e.target.dataset.visible === 'false') {
            target.type = 'password'
            e.target.src = '/eye.svg'
        } else {
            target.type = 'text'
            e.target.src = '/eye-slash.svg'
        }
    }
}