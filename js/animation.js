$(function () {
	
$('#pic').click(function(){
    $(this).attr('src','../img/sub_bar_hover.png')
    $('.thru .alba').css('display', 'block')
})

$('.thru .alba').click(function(){
    $('.thru .alba .menu ').css('display', 'block')
    $('.thru .alba .click_bubble').css('display', 'block')
    $('.thru .alba .bubble').css('display', 'none')
})
});
