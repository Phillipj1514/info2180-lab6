const name = document.getElementById("name");
const results = document.getElementById("result");
document.addEventListener("DOMContentLoaded", initiate);
function initiate(){
    document.getElementById("search").addEventListener("click", getData);
    results.classList.remove("alert");
}
function getData(){
    const superhero = new XMLHttpRequest();
    superhero.onreadystatechange = function (){
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            result.innerHTML = this.responseText;
            if( this.responseText != "Superhero not found"){
                results.classList.remove("alert-danger");
            }else{
                results.classList.add("alert-danger");
            }

        }
    };

    superhero.open("GET", "superheroes.php?query="+name.value,true);
    superhero.send();
    name.value = "";
    
}

