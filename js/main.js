// A $( document ).ready() block.
$( document ).ready(function() {
    //put your next function to call here
});

// credits to https://maze.digital/webticker/
$('#webTicker').webTicker({
    duplicate:true,
    rssfrequency:0,
    startEmpty:false,
    hoverpause:false,
    transition: "ease"
});

$("#stop").click(function(){
    $("#webTicker").webTicker('stop');
});
$("#continue").click(function(){
    $("#webTicker").webTicker('cont');
});
// credits to https://stephanwagner.me/jBox/documentation
new jBox('Tooltip', {
  attach: '.tooltip1',
  getTitle: 'data-jbox-title',
  getContent: 'data-jbox-content'
});
