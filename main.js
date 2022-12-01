const menuItens = document.querySelectorAll('.conheca a[href^="#"]')

menuItens.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
  event.preventDefault()
  const to = getScrollTopByHref(event.target) - 119
  scrollToPosition(to)
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  })
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("#conheca")
  return document.querySelector(id).offsetTop
}