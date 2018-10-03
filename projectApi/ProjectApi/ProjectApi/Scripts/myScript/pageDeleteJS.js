function deleteById() {
    var id = document.getElementById("txtId").value;
    if (id >0) {
        var url = 'http://localhost:53932/api/tornir/' + id;
        var req = new XMLHttpRequest();
        req.open('DELETE', url);
        req.onload = function () {
            alert("the Tornir id : "+id+" Deleteded ");
        }
        req.onerror = function () {
            alert("the Tornir id : " + id+  "not found ");
        }
        req.send();
    } else {
        alert("enter id please!!");
    }
    document.getElementById("txtId").value = "";
}

function deleteByIdJquery() {
    var id = $("#txtId").val();
    //if (id != null) {

        var urlWeb = 'http://localhost:53932/api/tornir/' + id;
        var ajaxInformtion = {
            type: "DELETE",
            url: urlWeb
        }
        $.ajax(ajaxInformtion).then(
            function (resp) {
                alert('the Tornir id : '+id+' Deleteded');

            }).fail(function (erro) {
                alert('the Tornir id : '+id+  'not found ');
            }
        )
    //}
    //else {
    //    alert("enter id please!!");    
    //}
}