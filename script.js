function screen(txt){
    document.getElementById("countdown").innerText=txt;
}

function countdown(){
    screen(10);
    setTimeout(() => {
        screen(9);
        setTimeout(() => {
            screen(8);
            setTimeout(() => {
                screen(7);
                setTimeout(() => {
                    screen(6);
                    setTimeout(() => {
                        screen(5);
                        setTimeout(() => {
                            screen(4);
                            setTimeout(() => {
                                screen(3);
                                setTimeout(() => {
                                    screen(2);
                                    setTimeout(() => {
                                        screen(1);
                                        setTimeout(() => {
                                            screen("Happy Independence Day")
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
    
}
countdown();
