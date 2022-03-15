const newAdviceBtn = document.querySelector('.btn-advice');
const id = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');

newAdviceBtn.addEventListener('click', newAdvice);

async function newAdvice() {
  const STREAM = await fetch('https://api.adviceslip.com/advice');
  const response = await STREAM.json();

  id.innerHTML = response['slip']['id']
  advice.innerHTML = response['slip']['advice']
}