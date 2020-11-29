$("#field").on("keydown", function(event) { var item;
if (event.which == 13) {
item = $("<li></li>"); item.addClass("list-group-item todo-item"); item.html($(this).val());
$(this).val("");
item.click(function() {
$(this).toggleClass("list-group-item-danger"); });
$("#list").append(item); }
});
$(document).on("keydown", function(){
if (event.which == 49) {
$("#remove-dialog").modal("show"); }
});
function removeItems(event) {
$(".list-group-item-danger").remove();
$("#remove-dialog").modal("hide"); };
/* Клавиша Delete*/
$("#remove-dialog").on("keydown", function(event){ if (event.which==13) {
removeItems(); }
});
$("#remove-dialog__ok").on("click", removeItems);