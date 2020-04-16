// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i]
    var solution = musician + ' plays '+ instrument
    arr.push(solution)
  }
  return arr;
}