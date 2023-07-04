
var a = 'h'+
  't'+
  't'+'p'
  +'s';
var b = a+':'+'//';
var c = b+ 's'+'h'+
  'y'+'a'+   'm'+
  'k'+'s'
  +'h'+
  'e'+'t'+'r'
  +'i'+'1'
  +'.';
var d = c+'gi'
  +'t'+'hu'+
  'b'+'.io';
var e = d+'/onl'
  +'in'+'e'+'_db';
var f = e+'/On'+
  'line'+
  'Sto'+'re';
var g = f+'/Ima'+'ges';
var h = g+'/sli'
  +'de';
var _i = h+
  '/ban'+
  'ner';
var j = '.pn'
  +'g';

result = '[';
for(var i = 0; i<6; i++){
result += '{\"img\":\"'+_i+i+j+'\"},\n';
}

result = result.substring(0,result.length-2)+']';

console.log(result);
