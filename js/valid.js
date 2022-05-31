function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd")
  {
    window.location.replace("home.html");/*opens the target page while Id & password matches*/
  }
  else if(form.userid.value == "myuserid1" && form.pswrd.value == "mypswrd1")
  {
    window.location.replace("404.html");/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }

}