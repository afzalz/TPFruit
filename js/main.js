$(document).ready(function(){
    const ajouter = $('#ajouter');
    const supprimer = $('#supprimer');

 
    ajouter.click(function(){
        if ($("#liste_fruits").val() == null){
            alert("choisir un fruit")
        }

        else {
            fruit =  $("#liste_fruits").val();
            $("." + fruit).remove();
            console.log(fruit);
            
            $('#panier').append('<option value=' + fruit + ' class=' + fruit + '>' + fruit + '</option>');
            
            

        }
        
    })


    supprimer.click(function(){
        if ($("#panier").val() == null){
            alert("choisir un fruit")
        }

        else {
            Pfruits =  $("#panier").val()
            $("." + Pfruits).remove();
            console.log(Pfruits);

            $('#liste_fruits').append('<option value=' + Pfruits + ' class=' + Pfruits + '>' + Pfruits + '</option>');
            

        }
        
    })
     
     
})