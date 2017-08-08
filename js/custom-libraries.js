/* Equal Heights of 2 Elements Starts */
function equalHeightsSimple(elem1ClassId, elem2ClassId)
{
	var maxHeight=$(elem1ClassId).height()>$(elem2ClassId).height() ? $(elem1ClassId).height()   :$(elem2ClassId).height();
	
	$(elem1ClassId).height(maxHeight);
	$(elem2ClassId).height(maxHeight);
	return maxHeight;
}
var applyEqualHeights =function(elem1ClassId, elem2ClassId)
{
	$(elem1ClassId).css('height', 'auto');
	$(elem2ClassId).css('height', 'auto');
	equalHeightsSimple(elem1ClassId, elem2ClassId);
}
/* Equal Heights of 2 Elements Ends */

/*  Set Line Height Starts */
var setLineHeight = function(idClass){
    $(idClass).each(function(){
        $(this).css('line-height',$(this).css('height'));
    });
};
var applySetLineHeight = function(idClass) {
	
    $(idClass).css('line-height','normal');
    setLineHeight(idClass);
}
/*  Set Line Height Ends */


$(function(){
	
});
$(window).resize(function(){

});
$(window).load(function(){

});
