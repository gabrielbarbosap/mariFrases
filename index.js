let itens = [
    'Para quê preocuparmo-nos com a morte? A vida tem tantos problemas que temos de resolver primeiro.',
    'Os covardes morrem várias vezes antes da sua morte, mas o homem corajoso experimenta a morte apenas uma vez.',
    'Nisto erramos: em ver a morte à nossa frente, como um acontecimento futuro, enquanto grande parte dela já ficou para trás. Cada hora do nosso passado pertence à morte.',
    'Temam menos a morte e mais a vida insuficiente.'
]

function myFunction() {
    let res = itens.find((_, i, ar) => Math.random() < 1 / (ar.length - 1));

    if (res === undefined) {
        console.log('aperta de novo');
        document.getElementById("demo").innerHTML = 'aperta de novo';

    } else {
        document.getElementById("demo").innerHTML = res;

        console.log(res);
    }
}