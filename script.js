// ===========================
// Amir Site
// Version 1.0
// ===========================

const startBtn = document.getElementById("startBtn");

if(startBtn){

    startBtn.addEventListener("click",()=>{

        const services = document.getElementById("services");

        if(services){

            services.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

}
