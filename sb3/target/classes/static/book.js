var uri = "http://localhost:8080/books/";

function save() {
    alert("save");
    var newBook = {
        "id": 1,
        "title": "fe",
        "author": "auth",
        "price": 200
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/books/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(newBook));
}
function update() {
    alert("update");
    var updateBook = {
        "id": 8,
        "title": "india",
        "author": "nehru",
        "price": 3400
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "http://localhost:8080/books/{id}?id=8", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(updateBook));
}
function del() {
    alert("delete");
    var deleteBook = {
        "id": 5,
        "title": "The love",
        "author": "kasi",
        "price": 200
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:8080/books/4", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify(deleteBook));
}