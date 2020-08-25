# Uma proprieadade é um valor que você pode obter ou definir (como alterar o conteúdo de um elemento HTML; ex: innerHTML)

# Um médodo é uma ação que você pode realizar (como adicionar ou excluir um elemento HTML; ex: getElementById)

# innerHTML => é a maneira mais fácil de obter ou substituir o conteúdo HTML

# Encontrar elementos HTML
    ## document.getElementById(id) => encontra o elemento pelo id 
    ## document.getElementsBytagName(name) => encontra o elemento pela tag name
    ## document.getElementsByClassName(name) => encontra os elementos pela classe

# Alterar elementos HTML
    ## element.innerHTML = `new content` => altera o html interno de um elemento
    ## element.attribute = new value => altera o valor do atributo no elemento HTML
    ## element.style.property = new style => altera o estilo do elemento HTML
    ## element.setAttribute(atributo, valor) => método para altera o valor do atributo do elemento HTML

# Adicionar e excluir elementos
    ## document.createElement(element) => cria um elemento HTML
    ## document.removeChild(element) => remove um elemento HTML
    ## document.appendChild(element) => adiciona um elemento HTML
    ## document.replaceChild(new, old) => substitui um elemento html por outro
    ## document.write(text) => escreva no fluxo de saída HTML
    