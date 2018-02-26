const regForm = document.getElementById("register");

regForm.addEventListener("submit", submitRegistration);

function submitRegistration(event){
  event.preventDefault();

  const username = document.getElementById("profile-name").value;

  const pw1 = document.getElementById("pw1").value;
  const pw2 = document.getElementById("pw2").value;

  const userData = {
    username : username,
    password : pw1
  };

  if (pw1 != pw2){
    alert("passwords don't match");
  } else {
    console.log(username, pw1);

    postData("/register", userData)
    .then(function(data){
      console.log(data);
    })
    .catch(error => console.error(error));
  }
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
