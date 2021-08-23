var i = 0;
var soma = 0;
process.argv.forEach(function (item, indice, array) 
{
    if(indice > 1)
    {
        var valor = parseInt(item);
        soma = parseInt(soma) + valor
    }
});
console.log(soma);