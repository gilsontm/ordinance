$(document).ready(function(){
    var next = 2;
    $(document.body).on("click", ".close_name_input", function(e){
        e.preventDefault();
        if($(".name_input").length > 1){
            $(this).parent().parent().remove();
        }
        console.log($(".name_input").length);
    });

    $("#add_name_input").click(function(e){
        e.preventDefault();
        $("#name_input_form").append('<div class="input-group name_input my-2" id="name_input_' + next +'"> ' +
            '<input type="text" class="form-control" name="involved_name_' + next + '" placeholder="Nome do envolvido"/>' +
            '<span class="input-group-addon"> <button type="button" class="close close_name_input" aria-label="Close"> ' +
            '<span aria-hidden="true">&times;</span> </button> </span> </div>');

        next ++;
    });
});
