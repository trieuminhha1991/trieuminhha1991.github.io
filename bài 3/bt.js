let cards=['a1','a2','a3','a4','a5'];
let kiemtra=null;
function shuffle(cards) {
    let currentIndex = cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
    return cards;
}
function flip(card){
    $(card).toggleClass('dao');
    $(card).css('pointer-events', 'none');
    if (!kiemtra) {
    	kiemtra=$(card);
    }
    else{
    	if(kiemtra.attr('data-name')!=$(card).attr('data-name')){
    		console.log('Khác nhau');
    		setTimeout(function(){
    		$(card).toggleClass('dao');
    		kiemtra.toggleClass('dao');
    		$(card).css('pointer-events', 'auto');
    		kiemtra.css('pointer-events', 'auto');
    		kiemtra=null;}, 500);
    	}else{
    		setTimeout(function(){
    			console.log('Giống nhau');
    			$(card).css('opacity','0');
    			kiemtra.css('opacity','0');
    			kiemtra=null;},200);

    	}
    }
}
$(function(){
	cards=cards.concat(cards)
	cards=shuffle(cards);
	let html='';
	for (var i = 0; i < cards.length; i++) {
		html +='<div class="card" data-name= "'+ cards[i]+'" onclick="flip(this)">'+'<div class="back"><img src="img/up.jpg"></div>'+'<div class="front"><img src="img/'+cards[i]+'.jpg"></div>'+'</div>';
	};

	$('.content').html(html);
});
