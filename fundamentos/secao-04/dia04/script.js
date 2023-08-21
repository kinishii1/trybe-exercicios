window.onload = () => {
  const getBG = localStorage.getItem('backGroundColor')
  const getFontColor = localStorage.getItem('textColor')
  const getFontSize = localStorage.getItem('fontSize')
  const getLineHeight = localStorage.getItem('lineHeight')
  const getfontFamily = localStorage.getItem('fontFamily')

 

  const setBackgroundColor = (color) => {
    let content = document.querySelector(".content")
    content.style.backgroundColor = color
  }

  const setFontColor = (color) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color
    }
  }

  const setFontSize = (size) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size
    }
  }

  const setLineHeight = (height) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height
    }
  }

  const setFontFamily = (family) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family
    }
  }

  setBackgroundColor(getBG)
  setFontColor(getFontColor)
  setFontFamily(getfontFamily)
  setFontSize(getFontSize)
  setLineHeight(getLineHeight)
  

  // Cor de fundo da tela;
  let backgroundColorButtons = document.querySelectorAll("#background-color>button")
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", (event) => {
      localStorage.setItem('backGroundColor', event.target.innerHTML)
      setBackgroundColor(event.target.innerHTML)
    })
  }

  // Cor do texto;
  let fontColorButtons = document.querySelectorAll("#font-color>button")
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", (event) => {
      localStorage.setItem('textColor', event.target.innerHTML)
      setFontColor(event.target.innerHTML)
    })
  }

  // Tamanho da fonte
  let fontSizeButtons = document.querySelectorAll("#font-size>button")
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", (event) => {
      localStorage.setItem('fontSize', event.target.innerHTML)
      setFontSize(event.target.innerHTML)
    })
  }

  // Espaçamento entre as linhas do texto;
  let lineHeightButtons = document.querySelectorAll("#line-height>button")
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", (event) => {
      localStorage.setItem('lineHeight', event.target.innerHTML)
      setLineHeight(event.target.innerHTML)
    })
  }

  // Tipo da fonte (_Font family_).
  let fontFamilyButtons = document.querySelectorAll("#font-family>button")
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", (event) => {
      localStorage.setItem('fontFamily', event.target.innerHTML)
      setFontFamily(event.target.innerHTML)
    })
  }
}
