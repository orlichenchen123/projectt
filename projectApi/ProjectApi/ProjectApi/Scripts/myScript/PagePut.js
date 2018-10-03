 function getTornirPut() {
     var id = document.getElementById("txtId").value;
     var req = new XMLHttpRequest();
     var url = 'http://localhost:53932/api/tornir/' +id
     req.open('GET', url)
     req.onload = function () {
            console.log(req)    
          var one = JSON.parse(req.response)
          console.log(one)
          document.getElementById("txtGameName").value = one.Game_Name
          document.getElementById("txtPlayer1").value = one.Player1
          document.getElementById("txtPlayer2").value = one.Player2
          document.getElementById("txtWhoWon").value = one.Who_Won
     }
     req.onerror = function () {
         alert('error')
     }
     req.send()
 }

 function putTornir() {
     var req = new XMLHttpRequest();
     var id = document.getElementById("txtId").value
     var url = 'http://localhost:53932/api/tornir/' + id
     req.open('PUT', url)
     req.setRequestHeader("Content-Type", "application/json")

     req.onload = function () {
         alert('updated!')
     }
     req.onerror = function () {
         alert('error')
     }
    let json = {   Game_Name : document.getElementById("txtGameName").value,
                   Player1 : document.getElementById("txtPlayer1").value,
                   Player2 : document.getElementById("txtPlayer2").value,
                   Who_Won : document.getElementById("txtWhoWon").value  }

     req.send(JSON.stringify(json))
 }



 function getTornirJquery() {

     var the_id = $("#txtId2").val()
     $.ajax({
         url: 'http://localhost:53932/api/tornir/' + the_id
     }).then(
         function (data) {
             console.log(data)
             one = data;
             $("#txtGameName2").val(one.Game_Name)
             $("#txtPlayer1_2").val(one.Player1)
             $("#txtPlayer2_2").val(one.Player2)
             $("#txtWhoWon2").val (one.Who_Won)
         }
         )
 }


 function putTornirJquery() {
     var id = $("#txtId2").val()
     var urlapi = 'http://localhost:53932/api/tornir/' + id
     var item = {
         Game_Name: $("#txtGameName2").val(),
         Player1: $("#txtPlayer1_2").val(),
         Player2: $("#txtPlayer2_2").val(),
         Who_Won: $("#txtWhoWon2").val()
     }
     console.log(item)

     var ajaxPostDataConfig = {
         type: "PUT",  
         url: urlapi,
         contenttype: "application/json",
         datatype: "json",
         data: item
     }

     console.log(ajaxPostDataConfig)
     $.ajax(ajaxPostDataConfig).then(
         function (data) {
             console.log(data)
             alert("updete sucsses")
         }
     ).fail(
         function (err) {
             console.error(err)
             alert("updete fail- errore")
         }
         )
 }