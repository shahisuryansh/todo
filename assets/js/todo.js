$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
    
})
//click on X to delete todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
    
})

//add a todo
$("input").keypress(function(event){
    if(event.which === 13)
    {
        var str = $(this).val();
        $("ul").append('<li><span><i class="far fa-trash-alt"></i></span> '+str+'</li>');
        $(this).val("");
    }
});

$(".fa-plus").click(function()
{
    $("input").fadeToggle();
})