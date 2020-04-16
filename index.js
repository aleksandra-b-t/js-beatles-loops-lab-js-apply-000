// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    var solution = musician + ' plays '+ instrument;
    arr.push(solution);
  }
  return arr;
}
function johnLennonFacts(facts) {
  var arr = [];
//   facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];
  var i = 0;
  while (i < facts.length){
    var fact = facts[i] + '!!!';
    arr.push(fact);
    i++;
  }
  return arr;
}
// function iLoveTheBeatles(n) {
//   var arr = [];
//   if (n < 15){
//   var i = 15 - n;
//   do {
//     while (i > 0){
//     arr.push('I love the Beatles!');
//       }
//   i--;
//   }
//   }
//   return arr;
// }