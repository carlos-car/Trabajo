function obtener() {
    var valor = document.getElementById("id").value;
    
   $.ajax({
       type: 'GET',
       url: 'https://jsonplaceholder.typicode.com/photos',
       data: { id: valor },
       datatype: 'json',
       success: function (data){
           $("#contenido").append('<tr><td>ID</td>'+'<td>albun</td>'+'<td>Titulo</td>'+'<td>IMG</td>');
           $.each(data, function(index, element){
               $("#contenido").append('<tr)');
               $("#contenido").append($('<td>'+ element.id +'<td>'));
               $("#contenido").append($('td>', {text: element.albunId }, '</td>'));
               $("#contenido").append($('<td>', {text: element.tittle }, '</td>'));
               $("#contenido").append($('<td><img src="'+element.url+'"></img></td>'));
               $("#contenido").append('</tr>');
           });
       }
   });
}

