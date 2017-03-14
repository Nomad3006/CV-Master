<?php
//if "email" variable is filled out, send email
  if ($_SERVER['REQUEST_METHOD'] == 'POST')  {

  //Email information
  $admin_email = "toma06pal@gmail.com";
  $email = $_REQUEST['email-input'];
  $name = $_REQUEST['name-input'];
  $comment = $_REQUEST['msg-input'];

  //send email
  mail($admin_email, "Contact CV", $comment, "From:" . $email);

  //Email response
  echo "Merci ! Je vous répondrai dans les plus bref délais";
  }

  //if "email" variable is not filled out, display the form
  else  {
?>

 <form method="post">
  Email: <input name="email" type="text" /><br />
  Subject: <input name="subject" type="text" /><br />
  Message:<br />
  <textarea name="comment" rows="15" cols="40"></textarea><br />
  <input type="submit" value="Submit" />
  </form>

<?php
  }
?>
