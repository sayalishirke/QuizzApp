function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    //Storing name of player
    sessionStorage.setItem("name", name);
  
    location.href = "quiz.html";
  }