const formElement = document.querySelector('.form');

	formElement.addEventListener('submit', function (evt) {
		evt.preventDefault();
	   
        checkAll();
    if (errors.length === 0) {
      let user = { 
        name: document.querySelector('#fio').value,
        phone: document.querySelector('#phone').value,
      }
    
    fetch("https://httpbin.org/post", 
    {
    method: "POST",
    body: new FormData(form),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
  })
    .then(response => response.json())
    .then(user => {
      console.log(user);
    })
    .catch((error) => console.log(error));
  console.log(form);
    }
	});


  //   fetch('https://httpbin.org/post', {
    //     method: 'POST',
    //     body: JSON.stringify(user),
    //     headers: {
    //       'Content-Type': 'application/json;charset=utf-8'},
    //   })
    //   .then (res => res.json())
    //   .then (user => console.log(user))