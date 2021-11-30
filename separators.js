const tho_sepa = "'";
const dec_sepa = ".";
          
 function keyupHandler(event) {
     var target = event.target;
	    target.dataset.value = getNumberFromStr(target.value);
	    target.value = setNumericSeparator(target.dataset.value);
     target.title = target.dataset.value;
 }
 
 function getNumberFromStr( inputStr ){
     const wo_sepa = new RegExp(tho_sepa+"+", "g");
     var input = inputStr.replace(wo_sepa, "");
     const legal_d = new RegExp("(\\-?)(((\\d+)(((\\"+dec_sepa+"?)(\\d{0,}))?)){0,1})", "g"); //  /(\-?)(((\d+)(((\.?)(\d{0,}))?)){0,1})/g;
     var resultArr = input.match(legal_d);
     if (resultArr != null && resultArr.length > 0)
       input = resultArr.reduce(function(r, c){
           return c.length > r.length ? c : r ;
       });
     else input = "";
	    return input;
 }
 
 function setNumericSeparator( inputStr ) {
     var input = inputStr;
     const dig_group = /(?<=\d)(?=(\d\d\d)+(?!\d))/g;
     var input = input.replace(dig_group, tho_sepa);
     return input;
 }
