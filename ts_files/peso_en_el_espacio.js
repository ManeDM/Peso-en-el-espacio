function calcular() {
    var peso_tierra = parseInt(document.getElementById("peso_init").value);

    var calculo_lun = Math.round(peso_tierra * 1.66 / 9.81) + " Kg";
    document.getElementById('caja_lu').innerHTML = calculo_lun;

    var calculo_mer = Math.round(peso_tierra * 3.7 / 9.81) + " Kg";
    document.getElementById('caja_me').innerHTML = calculo_mer;
    
    var calculo_ven = Math.round(peso_tierra * 8.87 / 9.81) + " Kg";
    document.getElementById('caja_ve').innerHTML = calculo_ven;
    
    var calculo_mar = Math.round(peso_tierra * 3.71 / 9.81) + " Kg";
    document.getElementById('caja_mar').innerHTML = calculo_mar;
    
    var calculo_jup = Math.round(peso_tierra * 24.79 / 9.81) + " Kg";
    document.getElementById('caja_jup').innerHTML = calculo_jup;

    var calculo_sat = Math.round(peso_tierra * 10.44 / 9.81) + " Kg";
    document.getElementById('caja_sat').innerHTML = calculo_sat;

    var calculo_ur = Math.round(peso_tierra * 8.69 / 9.81) + " Kg";
    document.getElementById('caja_nep').innerHTML = calculo_ur;

    var calculo_nep = Math.round(peso_tierra * 11.15 / 9.81) + " Kg";
    document.getElementById('caja_ur').innerHTML = calculo_nep;   
}
    
