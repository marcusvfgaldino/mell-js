const load  = function (url) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.readyState + " / " + this.status);
            return xhttp.responseText;
         } else {
             console.log(this.readyState + " / " + this.status);
         }
    };
    xhttp.open("GET", url, true);
    xhttp.send(); 
}