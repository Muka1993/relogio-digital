
// FUNÇÃO CARREGA HORA MOSTRA AS CONDIÇÕES DO DIA
function carregaHora(){
   
    var data = new Date();
    var hora = data.getHours();
    var corpo = document.querySelector('body');
    var relogio = document.querySelector('.clock');
    var res = document.querySelector('.res');
    
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        corpo.classList.add("manha");
        relogio.classList.add("cedo");
        res.classList.add("saud");
        res.innerHTML = 'BOM DIA!!!'
    
    }else if(hora >= 12 && hora <= 17){
        //BOA TARDE!
        corpo.classList.add("tarde");
        relogio.classList.add("tardezinha");
        res.classList.add("saud");
        res.innerHTML = 'BOA TARDE!!!'

    }else if(hora >= 17 && hora <= 18){
        //BOM FIM DE TARDE!
        corpo.classList.add("tarde-fim");
        relogio.classList.add("tarde-cont");
        res.classList.add("saud-tarde");
        res.innerHTML = 'BOM FIM DE TARDE!!!'
    
    }else {
        //BOA NOITE!
        corpo.classList.add("noite");
        res.innerHTML = 'BOA NOITE!!!'
        
    }
}

// RELÓGIO DIGITAL COM VUE JS
var clock = new Vue({
    el: '.clock',
    data: {
        time: '',
        date: ''
    }
});

var week = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getDate(), 2) + '-' + week[cd.getDay()] + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getFullYear(), 4);
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}
