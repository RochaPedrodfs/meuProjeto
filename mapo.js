var paises = ['Argentina', 'Brasil', 'Colombia']
paises.forEach(function(pais){
    console.log(pais)
})


let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
let maiores = numeros.filter(function(numeros)
{
    return numeros > 18
}
)
console.log(maiores)