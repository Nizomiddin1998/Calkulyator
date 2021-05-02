// function Tekshir(){
//     let aSon = document.getElementById('a').value;
//     let bSon = document.getElementById('b').value;
//     let amal = document.getElementById('amal').value;
//     let qosh;

//     if (aSon > bSon) 
//         document.getElementById('result').innerHTML = aSon;
//     else if(aSon<bSon)
//     document.getElementById('result').innerHTML = bSon;
//     else 
//     document.getElementById('result').innerHTML = aSon + ' va ' +bSon+ ' o\'zaro teng';

//     if(amal === '+'){
//         qosh=parseInt(aSon) + parseInt(bSon);
//     }
//     else if(amal === '-'){
//         qosh=aSon - bSon;
//     }
//     else if(amal === '/'){
//         qosh=aSon / bSon;
//     }
//     else 
//         qosh = aSon * bSon;
//     document.getElementById('natija').innerHTML = qosh;
// }
let amal1 = '';
let qiymatA = '';
let qiymatB = '';
let bajar = '';
let ozgaruvchi = document.getElementById('natija').value
function hisob(x) {
       if(bajar !== '') {
           tozalash()
           bajar = ''
        document.getElementById('natija').value += x;  
      
        } else {
        document.getElementById('natija').value += x;  
       }
          
    
    
}



function amal(d) {
    switch (d) {
        case '+':
            amal1 = '+';
            break;
        case '-':
            amal1 = '-';
            break;
        case '*':
            amal1 = '*';
            break;
        default:
            amal1 = '/';
            break;
    }
    qiymatA = document.getElementById('natija').value;
    document.getElementById('natija').value = '';

}

function natija() {
    qiymatB = document.getElementById('natija').value;

    if (amal1 == '+')
       { bajar = parseInt(qiymatA) + parseInt(qiymatB);
    document.getElementById('natija').value = bajar;}

    else if (amal1 == '-'){
        bajar = qiymatA - qiymatB;
    document.getElementById('natija').value = bajar;}

    else if (amal1 == '/')
    {    bajar = qiymatA / qiymatB;
    document.getElementById('natija').value = bajar;}

    else {bajar = qiymatA * qiymatB;
    document.getElementById('natija').value = bajar;}

    
}

function tozalash() {
    document.getElementById('natija').value = '';
}

