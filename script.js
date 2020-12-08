const c1 = document.getElementById('c1');
const vysledek = document.getElementById('vysledek');
const vyber = [
    { option: 'Obvod', value: function() { return c1.value * 4} },
    { option: 'Obsah', value: function() { return c1.value * c1.value} }
]


c1.addEventListener('input', function(){
    c1.innerText = c1;
})

vysledek.addEventListener('click', function(){
    console.log(document.getElementById('vyber').value);
    let vypocet = vyber.find(function(obj) { return obj.option === document.getElementById('vyber').value});
    console.log(vypocet.value());
    document.getElementById('vypocet').innerHTML = `<b>${document.getElementById('vyber').value} = ${vypocet.value().toFixed(2)}cm</b>`;
})