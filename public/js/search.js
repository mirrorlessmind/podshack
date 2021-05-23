const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#search-input');
const shackBtn = document.querySelector('#shackBtn');


const searchEl = async (event) => {
  event.preventDefault();

  const userInput = searchInput.value.trim();

  console.log(userInput)
  if (userInput) {
    const response = await fetch(`/results/${userInput}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log(response);
      document.location.replace(`/results/${userInput}`);
    } else {
      alert(response.statusText);
    }

  } else {
    alert('Please enter words')
  }
};


const shackEl = async (event) => {
  event.preventDefault();
  const response = await fetch(`/results/random`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    console.log(response);
    document.location.replace(`/results/random`);
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.search-form')
searchBtn.addEventListener('click', searchEl);

document
  .querySelector('.search-form')
shackBtn.addEventListener('click', shackEl);