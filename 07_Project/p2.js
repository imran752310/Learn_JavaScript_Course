const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    const h = document.querySelector('#height').value;  // Horas trabajadas
    const w = document.querySelector('#width').value;  // Horas trabajadas

    if(h == "" || w == ""){
        alert("Todos los campos son obligatorios");
        return false;
    }else{
        
        let area = Number(h)*Number(w);  
        const result = document.querySelector('.result');
        result.innerHTML = `the Height ${h} and width ${w}. the total Area ${area}`;

}
});