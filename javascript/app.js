const name = document.getElementById("name").value;
const results = document.getElementById("result");
document.addEventListener("DOMContentLoaded", initiate);
function initiate(){
    document.getElementById("search").addEventListener("click", getData);
    results.classList.remove("alert");
    results.classList.remove("alert-danger");
    alert("no danger");
}
function getData(){
    name = "";
    const superhero = new XMLHttpRequest();
    superhero.onreadystatechange = function (){
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            result.innerHTML = this.responseText;
            alert(this.responseText);
            if( this.responseText != "Superhero not found"){
                results.classList.remove("alert");
                results.classList.remove("alert-danger");
                alert("no danger");
            }else{
                results.classList.add("alert");
                results.classList.add("alert-danger");
                alert("danger");
            }

        }
    };

    superhero.open("GET", "superheroes.php?query="+name,true);
    superhero.send();
    
}

