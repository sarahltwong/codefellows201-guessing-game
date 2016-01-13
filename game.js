//score variable counts the # of correct answers
      var score = 0;
//question one
      var q1 = prompt ("Do I like lattes?").toLowerCase();
      if(q1 === "yes" || q1 === "y"){
        score++;
        alert("That is correct!");
      } else if (q1 === "no" || q1 === "n") {
        alert("That is incorrect!");
      }
//question two
      var q2 = prompt ("Do I like tea?").toLowerCase();
      if(q2 === "yes" || q1 === "y"){
        score++;
        alert("That is correct!");
      } else if (q2 === "no" || q1 === "n") {
        alert("That is incorrect!");
      }
//question three
      var q3 = prompt ("Do I like dogs?").toLowerCase();
      if(q3 === "yes" || q1 === "y"){
        score++;
        alert("That is correct!");
      } else if (q3 === "no" || q1 === "n") {
        alert("That is incorrect!");
      }
//question four
      var q4 = prompt ("How old am I?");
      if(parseInt(q4) > 24){
        alert("That is too high!");
      } else if (parseInt(q4) < 24) {
        alert("That is too low!");
      } else if (parseInt(q4) = 24) {
        score++;
        alert("That is correct!");
      } else if (typeof q4 === "string") {
        alert("That is not a number!");
      }
//question five
      var q5 = prompt ("What number am I thinking of? It is below 50.");
      var q5answer = 23;
      while (q5 != q5answer){
        var q5 = prompt ("Nope! Guess again.");
        }
          score++;
          alert("That is correct!");

//print score
      alert("You answered " + score + " questions correctly!");
