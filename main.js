// identificando o clique no elemento escolhido -> ID = CONHECA
const tagItem = document.getElementById('recursos');

tagItem.addEventListener('click', scrollToIdOnClick);

function scrollToIdOnClick(event) {
    const element = event.target;
    console.log(element);
}
// console.log(tagItem);