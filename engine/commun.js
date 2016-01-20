$(document).ready( function(){
    $('meta[name=title]').attr('title', siteTitle);
    $("h1").html(siteTitle);
    $("#wtf").html(wtf);
    $.each( societes, function( keySoc, datasSoc ) {
        $( "#listeSocietes" ).append( "<tr><td class='societe' data-id='" + keySoc + "'>" + datasSoc.title + "</td></tr>" );
        
         //$.each( datasSoc, function( kItem, vItem ) {
//            console.log( kItem + ": " + vItem );
//        });
    });
    
    
});


