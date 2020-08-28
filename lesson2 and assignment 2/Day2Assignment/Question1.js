let alias, response;
 do { Get the user's name. alias = prompt(" What is your name?"); // Ask the user if that is really her name. response = prompt(" Are you sure " + alias + " is your name?"); } while (response != "yes"); // Say hello to the user. alert(" Hello " + alias);

