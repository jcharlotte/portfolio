//------------------------------- My Birhtday - COUNTDOWN

const birhtday = new Date("Jul 19, 2021 17:35:00").getTime();

x = setInterval(function(){

    const now = new Date().getTime();
    const distance = birhtday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if( distance < 0){
        clearInterval(x);
        document.getElementById('countdown').innerHTML = "Happy Birthday Me";
    }
}, 1000);



//-------------------------------