//score variable counts the # of correct answers
      var score = 0;
//question one
      var q1 = prompt ("Do I like lattes?").toLowerCase();
      if(q1 === "yes" || q1 === "y"){
        score++;
        console.log("That is correct!");
      } else if (q1 === "no" || q1 === "n") {
        console.log("That is incorrect!");
      }
//question two
      var q2 = prompt ("Do I like tea?").toLowerCase();
      if(q2 === "yes" || q1 === "y"){
        score++;
        console.log("That is correct!");
      } else if (q2 === "no" || q1 === "n") {
        console.log("That is incorrect!");
      }
//question three
      var q3 = prompt ("Do I like dogs?").toLowerCase();
      if(q3 === "yes" || q1 === "y"){
        score++;
        console.log("That is correct!");
      } else if (q3 === "no" || q1 === "n") {
        console.log("That is incorrect!");
      }
//question four
      var q4 = prompt ("How old am I?");
      if(q4 > 24){
        console.log("That is too high!");
      } else if (q4 < 24) {
        console.log("That is too low!");
      } else if (q4 == 24) {
        score++;
        console.log("That is correct!");
      } else if (typeof q4 === "string") {
        console.log("That is not a number!")
      }
//question five
      do{
        var q5 = prompt ("What number am I thinking of?")
      }
      while(q5 <> 23)

//print score
      console.log("You answered " + score + " questions correctly!")
