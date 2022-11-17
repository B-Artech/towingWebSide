document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navbar')
  const allNavItem = document.querySelectorAll('.nav-link')
  const navList = document.querySelector('.navbar-collapse')
  const btn = document.querySelector('.navbar-toggler')

  function addShadow() {
    if (window.scrollY >= 0.1) {
      nav.classList.add('shadow-bg')
    } else {
      nav.classList.remove('shadow-bg')
    }
  }

  function btnShadow() {
    if (window.scrollY >= 0) {
        nav.classList.add('shadow-bg')
      } else {
        nav.classList.remove('shadow-bg')
      }
  }

  allNavItem.forEach((item) =>
    item.addEventListener('click', () => navList.classList.remove('show')),
  )

  window.addEventListener('scroll', addShadow)
  btn.addEventListener('click', btnShadow)
})
