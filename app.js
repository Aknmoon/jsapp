const question = 'ゲーム史上、最も売れたゲーム機はどれ？';
const answers = [ 
  'スーパーファミコン', 
  'PlayStation 2', 
  'ニンテンドーDS', 
  'Xbox 360'
];
 const correct = 'ニンテンドーDS';

console.log();

const setupQuiz =() => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
}
}


const $button = document.getElementsByTagName('button');

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];




$button[0].addEventListener("click", ()=> {
  if(correct === $button[0].textContent){
    window.alert('正解');
  }else{
    window.alert('不正解');
  }
});
$button[1].addEventListener("click", ()=> {
  if(correct === $button[1].textContent){
    window.alert('正解');
  }else{
    window.alert('不正解');
  }
});
$button[2].addEventListener("click", ()=> {
  if(correct === $button[2].textContent){
    window.alert('正解');
  }else{
    window.alert('不正解');
  }
});
$button[3].addEventListener("click", ()=> {
  if(correct === $button[3].textContent){
    window.alert('正解');
  }else{
    window.alert('不正解');
  }
});
