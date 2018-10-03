function getTornir() {
    
    var req = new XMLHttpRequest();
    var url = 'http://localhost:53932/api/tornir';
    req.open('GET', url);
    req.onload = function () {
        var list = JSON.parse(req.response);
        document.getElementById("results").innerHTML += req.response 
    } 
    req.onerror = function () {
        alert('error');
    }
    req.send()
}

function getByIdTornir() {
    document.getElementById("txtId").innerHTML = "<br>";
    document.getElementById("results").innerHTML = "<br>";
    var id = document.getElementById('txtId').value;
    var url = 'http://localhost:53932/api/tornir/' + id
    if (id > 0) {
        var req = new XMLHttpRequest();
        req.open('GET', url)
        req.onload = function () {
            var data = JSON.parse(req.response)
            console.log(data)
            document.getElementById("results").innerHTML += req.response;
            //var dataString = "";
            //    dataString+="<tr>"
            //dataString += '<td>' + data[ID] + "</td>"
            //dataString += '<td>' + data[Game_Name] + "</td>"
            //dataString += '<td>' + data[Player1] + "</td>"
            //dataString += '<td>' + data[Player2] + "</td>"
            //dataString += '<td>' + data[Who_Won] + "</td>"
            //dataString += "</tr>"
            //$("#results2").append(dataString);
        }
        req.send();
    }
}

function getTornirJquery() {
document.getElementById('results').value = ''
$.ajax({
  url: 'http://localhost:53932/api/tornir'
}).done(function(data) {
  console.log(data);
  for (var i = 0; i < data.length;i++) { 
     var strResulte="ID: "+data[i].ID +" "+ 
                    "Game Name: "+data[i].Game_Name +" "+ 
                     "Player1 :" +data[i].Player1+" "+
                     "Player2 :" +data[i].Player2+ " "+
                     "Who Won: "+data[i].Who_Won+ "</br>"
   $("#results").append(strResulte);
      
}      
});
    }


    function getTornirByIdJquery() {
        $("#txtId").append("<p></p>");
         $("#results").append("<p></p>");
        var id = $('#txtId').val();
        $.ajax({
          url: 'http://localhost:53932/api/tornir/'+id
        }).done(
function(data) {
          console.log(data);
          var strResulte="ID: "+data.ID +" "+ 
                    "Game Name: "+data.Game_Name +" "+ 
                     "Player1 :" +data.Player1+" "+
                     "Player2 :" +data.Player2+ " "+
                     "Who Won: "+data.Who_Won+ "</br>";
         $("#results").append(strResulte)

});
}
   
