// (() => {
//     const imgs = document.querySelectorAll('.img-wrapper:not(.img-letter)')
//     const letter = document.getElementsByClassName('img-letter')[0]

//     for (const child of imgs) {
//         child.onmouseenter = e => {
//             const t = e.target
//             var tDim = t.getBoundingClientRect();

//             letter.style.width = parseInt(t.offsetWidth) + 60 + "px"
//             letter.style.visibility = 'hidden'

//             letter.children[0].src = t.children[0].src
//             letter.style.top = tDim.top + 'px'
//             letter.style.left = tDim.left + 'px'
//             letter.style.visibility = 'visible'
//             letter.style.width = parseInt(t.offsetWidth) + 60 + "px"

//         }
//         child.onmouseleave = e => {
//             // letter.style.display = 'none'
//         }
//     }
// })()

