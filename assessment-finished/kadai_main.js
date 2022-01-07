const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日は、とても暑かった。 :insertx:は所持金10ドルをもって森の中を歩いていた。華氏90度なのでとても暑かった。途中で友達に合った。水飲み場に着いたとき、:inserty:から美しい音色が聞こえてきた。 :insertx:は:inserty:へ水を飲まずに向かっていった。しかし、:insertz:。';
const insertX = ['熊さん', '小人', 'おじさん'];//javascriptの配列
const insertY = ['山の向こう', '家', '駅の方向'];
const insertZ = ['それは夢だった', '途中でのどが渇いてしまい、倒れてしまった。', '水を飲み忘れたことに途中で気づき、水飲み場へ戻った。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);//選んだ文字列に置き換える
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('友達', name);//userが入力したもに置換
  }

  if (document.getElementById("ja").checked) {
    const money = `${Math.round((115.66) * 10)}円`;
    const temperature =  `摂氏${Math.round((94-32) * 5 / 9)}度`;
    newStory = newStory.replace('10ドル', money);
    newStory = newStory.replace('華氏90度', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
