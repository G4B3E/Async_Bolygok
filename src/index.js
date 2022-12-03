import './style.css';

let response = await fetch('/planets.json');
let eredmeny = await response.json();

document.addEventListener('DOMContentLoaded', async() => {
    fetch('/planets.json')
        .then(response => response.json())
        .then(data => showInfo(data));

    function showInfo(data){
    console.table(data.planets);
    } 


    document.getElementById('Összesbolygo').addEventListener('click', () => {
        document.getElementById('osszes').textContent = ""
        eredmeny.planets.sort((a, b) => a.name.localeCompare(b.name))
        for (let e of eredmeny.planets) {
            let ul = document.createElement('ul')
            ul.innerHTML = e.name + ", " + e.area;
            document.getElementById('osszes').appendChild(ul)
        }
    })

    document.getElementById('Atmero').addEventListener('click', () => {
        document.getElementById('atmero').textContent = ""
        eredmeny.planets.sort((a, b) => a.name.localeCompare(b.name))
        let tomb = [];
        for (let e of eredmeny.planets) {
            let atmero_szamolas = 2 * Math.sqrt(e.area / (4 * Math.PI))
            tomb.push(atmero_szamolas);
        }
        let p = document.createElement('p');
        for(let e of tomb){
            p.innerHTML += e +  "  ;  " 
        }
        document.getElementById('atmero').appendChild(p)
    })




    document.getElementById('TorpeBolygo').addEventListener('click', () => {
        document.getElementById('torpebolygo').textContent = ""
        eredmeny.planets.sort((a, b) => a.name.localeCompare(b.name))
        console.log("000000000000000000000000000000000000000000");
        let torpeosszeadva = 0;
        for(let e of eredmeny.planets){
            if(e.dwarf == true){
                torpeosszeadva += e.area;
                let p = document.createElement('p');
                p.innerHTML = torpeosszeadva; 
                
            }
        }
        document.getElementById('torpebolygo').appendChild(p)
       
    })




    // document.getElementById('TorpeBolygo').addEventListener('change', (e) => {
    //     console.log("D1");
    //     if(e.checked){
    //         console.log("D2");
    //         let torpeosszeadva = 0;
    //         for(let e of eredmeny.planets){
    //             if(e.dwarf == true){
    //                 torpeosszeadva += e.area;
    //                 let p = document.createElement('p');
    //                 p.innerHTML = torpeosszeadva; 
    //                 document.getElementById('torpebolygo').appendChild(p)

    //             }
    //         }
    //     }
    //     eredmeny.planets.sort((a, b) => a.name.localeCompare(b.name))
    //     let osszeadva = 0;
    //     for (let e of eredmeny.planets) {
          
            
         

    //     }
    // })

})


