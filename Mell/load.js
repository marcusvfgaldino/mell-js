const load  = function (url, atribute) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.readyState + " / " + this.status);
            html.insert(xhttp.responseText, atribute, "beforebegin");
         } else {
             console.log(this.readyState + " / " + this.status);
         }
    };
    xhttp.open("GET", url, true);
    xhttp.send(); 
}