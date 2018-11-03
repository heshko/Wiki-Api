$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault()
        var heshko = $("input").val();
        heshkoRecuest(heshko)
    });
    function heshkoRecuest(heshko){
        url='https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&format=json&search='+heshko+ '&callback=?';
        $.getJSON(url, function(data){
            console.log(data)
        $.each(data,function (){
            $(".resultat").html("<h5>"+data[2]+"</h5>")
        });
        })
    }
});

    
  


