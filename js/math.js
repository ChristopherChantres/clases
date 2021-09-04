document.querySelector('#calculate').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#first_number').value);
    const n2 = parseInt(document.querySelector('#second_number').value);
    const op2 = document.querySelector('#op').value;
    let r;
    if(op2 == '+'){
        r = n1 + n2;
    }else if( op2 == '-'){
        r = n1 - n2;
    }else if(op2 == '*'){
        r = n1 * n2;
    }else if(op2 == '/'){
        r = n1 / n2;
    }
    document.querySelector('#answer').innerHTML = r;
});