const newAdviceBtn = document.querySelector('.btn-advice');
const id = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');

newAdviceBtn.addEventListener('click', newAdvice);


async function newAdvice() {
  // animate newAdviceBtn and display the message while data is being fetched
  newAdviceBtn.classList.add('animate');
  advice.innerHTML = 'Please wait!';
  
  try {
    const STREAM = await fetch('https://api.adviceslip.com/advice');
    const response = await STREAM.json();
    
    newAdviceBtn.classList.remove('animate');
    id.innerHTML = response['slip']['id']
    advice.innerHTML = response['slip']['advice']
  } catch(err) {
    id.innerHTML = 'error';
    advice.innerHTML = err;
  }
}