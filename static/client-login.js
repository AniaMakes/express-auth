const regForm = document.getElementById("login");

regForm.addEventListener("submit", logUserIn);

function logUserIn(event){
  event.preventDefault();

  const username = document.getElementById("profile-name").value;
  const pw = document.getElementById("pw").value;
  const userData = {
    username : username,
    password : pw
  };

  postData("/logging-in", userData)
  .then(function(data){
    console.log(data);
  })
  .catch(error => console.error(error));
}


function postData(url, data) {
  console.log("inside postData", url, data);
  // makes sure that data is in JSON format
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, PUT, DELETE, etc.
  })
  .then( function(response){
    return response.json();
  });
}
