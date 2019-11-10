document.addEventListener("DOMContentLoaded", initiate);
function initiate(){
    document.getElementById("search").addEventListener("click", getData);
}
function getData(){
    //alert("Your Data is");
    const name = document.getElementById("name").value;
    //alert(name);
    const superhero = new XMLHttpRequest();
    superhero.onreadystatechange = function (){
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
    };

    superhero.open("GET", "superheroes.php?name="+name,true);
    superhero.send();
    
}

