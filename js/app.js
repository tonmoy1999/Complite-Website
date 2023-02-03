const getcoloer = () =>{
    const numder=Math.floor(Math.random()* 16777215);
    const codes = "#" + numder.toString(16);
    document.body.style.backgroundColor = codes;
}
document.getElementById("btn").addEventListener("click", getcoloer)