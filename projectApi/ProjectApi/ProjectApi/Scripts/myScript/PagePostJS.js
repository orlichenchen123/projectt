function postTornir() {
    var req = new XMLHttpRequest();
    var url = 'http://localhost:53932/api/tornir'
    req.open('POST', url)
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function () {
        alert('Created!')
    }
    req.onerror = function () {
        alert('error')
    }
    var item = {
        Game_Name: document.getElementById("txtGameName").value,
        Player1: document.getElementById("txtPlayre1").value,
        Player2: document.getElementById("txtPlayre2").value,
        Who_Won: document.getElementById("txtWhoWon").value
    }
    req.send(JSON.stringify(item));
    document.getElementById("txtGameName").value = "";
    document.getElementById("txtPlayre1").value = "";
    Player2: document.getElementById("txtPlayre2").value = "";
    document.getElementById("txtWhoWon").value = "";
}

function postJQueryTornir() {
    var url_web_api = 'http://localhost:53932/api/tornir'
   
    var item = {
        Game_Name: $("#txtGameName").val(),
        Player1: $("#txtPlayre1").val(),
        Player2: $("#txtPlayre2").val(),
        Who_Won: $("#txtWhoWon").val()
    }
    //console.log(item)

    //// JSON.stringify(item)

    var ajaxPostDataConfig = {
        type: "POST", // what is the method? post, get, put , delete
        url: url_web_api,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(item) // request http body
    }

    $.ajax(ajaxPostDataConfig).then(
        // what to do after success?
        function (data) {
            alert("created new Tornir")
        }
    ).fail(
        // what to do on error
        function (err) {
            console.error(err)
        }
        )

    $("#txtGameName").val() = "";
    $("#txtPlayre1").val() = "";
    $("#txtPlayre2").val() = "";
    Who_Won: $("#txtWhoWon").val() = "";
}