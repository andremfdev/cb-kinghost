const menuItens = document.querySelectorAll('.conheca #recursos[href^="a"]')

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
  const id = element.getAttribute("a")
  return document.querySelector(id).offsetTop
}