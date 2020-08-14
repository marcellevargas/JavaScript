# O que é Ajax?
    ## AJAX é um acrônimo para Asynchronous JavaScript XML. Ou seja, é o uso do objeto XMLHttpRequest para se comunicar com os scripts do lado do servidor.

    ## Ele pode enviar e receber informações em uma variedade de formatos (JSON, XML, HTML e TXT)

    ## Natureza assíncrona => significa que ele pode fazer a requisição sem a nescessidade de atualizar a página.

    ## Em resumo o Ajax permite fazer requisições para o servidor sem a necessidade de atualizar a página e permite receber e trabalhar com dados do servidor

# Como realizar uma requisição HTTP ao servidor

    ## Para realizar uma requisição http ao servidor eu preciso de uma instância de uma classe que possui essa funcionalidade (XMLHttpRequest)

    ## Depois de fazer a requisição HTTP ao servidor chega o momento de decidir o que fazer com a resposta do servidor ao seu pedido.

    ## onreadystatechange => propriedade que define qual função javascript irá manipular o objeto.
        ex: httpRequest.onreadystatechange = nameOfTheFunction;
        => Nesse caso não existe parênteses depois do nome da função pois estamos apenas atribuindo uma referência à função.

    ## Realizando a requisição:
        => .open(): 
                ex: httpRequest.open('GET', 'http://www.example.org/some.file', true);
            O método open() é composto por 3 paramêtros:
                => método: GET, POST (sempre em letras maiúsculas para manter o padrão do HTTP)
                => url: URL da página que eu estou fazendo a requisição
                => assíncrono <boolean> : é o parâmetro que define se a minha requisição é assincrona ou não (a execução da função JavaScript irá continuar enquanto a resposta do servidor não chegar)

        => .send():
                ex: 
                httpRequest.send(null);
            O método send() é utilizado para enviar algo para o servidor.
            => Em alguns casos ao realizar o post pode ser nescessário definir o MIME que seria o cabeçalho da minha requisição
                    ex:
                     httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    ## Manipulando a resposta do servidor
        => Ao realizar a requisição eu defino uma função que deve lidar com a respota do servidor

            => Essa função deve primeiro checar o estado da requisição usando a propriedade .readyState (o readyState é o estado de prontidão, que mostra qual é o status do processo que está sendo executado e se está sendo executado)

                    => object.readyState === 0 : não iniciado

                    => object.readyState === 1 : carregando

                    => object.readyState === 2 : carregando

                    => object.readyState === 3 : interativo

                    => object.readyState === 4 : completo

            => Depois a função deve verificar o status da resposta do servidor usando o .status

            => Tratando os dados recebidos pelo servidor
                    => httpRequest.responseText: retorna a resposta do servidor como uma string de texto
                    => httpRequest.responseXML: Retorna a respota do servidor como um um objeto XMLDocument no qual você poderá percorrer usando funções da DOM do JavaScript
