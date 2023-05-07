const colorScheme = document.getElementById('color-scheme')
const colorSchemeHexNum = document.getElementById('color-scheme-hex-num')

document.getElementById('form').addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    const colorPicker = document.getElementById('color-picker').value.replace('#', '')
    const colorMode = document.getElementById('color-mode').value
    let getColorArray = []
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${colorMode}&count=5`, {method: "GET"})
        .then(res => res.json())
        .then(data => {
            for(let i=0; i < data.colors.length; i++){
                getColorArray.push(data.colors[i].hex.value)
            }
            colorArray = getColorArray.slice(0, 5)
            colorScheme.innerHTML = getColorArray.map( hex =>{
                    return `<div style="background-color: ${hex};"></div>`
                }).join('')
            colorSchemeHexNum.innerHTML = getColorArray.map( hex =>{
                    return `<p>${hex}</p>`
                }).join('')
        })
}
