const body = document.querySelector("body");
const contain = document.querySelector(".container");
const width = document.createElement("button");
width.textContent = "Adjust Grid";
body.insertBefore(width, contain);

function starter(value){
    for (i=0;i<value;i++){
        let secContain = document.createElement("div");
        secContain.setAttribute("class", "branch");
        secContain.textContent = "";
        contain.appendChild(secContain)
        for (j=0;j<value;j++){
            let div = document.createElement("div");
            div.textContent = "";
            secContain.appendChild(div)
        }
    }
    let groups = document.querySelectorAll('.branch div');
    groups.forEach(group => {
        group.addEventListener('mouseenter', () => {
            group.style.backgroundColor = getRandomColor(); 
        }); 
    
    })
    
}
starter(16);

width.addEventListener("click", () => {
    contain.textContent = "";

    let value = prompt("Enter the Number(Max 100)");
    value = parseInt(value);

    if (value>0 &&  value<=100){
        starter(value)        
    }else { 
        alert("wrong input!");
        starter(16)
    }
})


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);  
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256);  
    return `rgb(${r}, ${g}, ${b})`;
}

