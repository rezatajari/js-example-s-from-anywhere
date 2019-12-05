/*
    That can be easily deducted from the algorithm of for:
    
    Execute once i = 0 before everything (begin).
    Check the condition i < 5
    If true – execute the loop body alert(i), and then i++
    The increment i++ is separated from the condition check (2).
    That’s just another statement.
    The value returned by the increment is not used here, so 
    there’s no difference between i++ and ++i.
 */
//The postfix form:
for (let i = 0; i < 5; i++) alert(i);
//The prefix form:
for (let i = 0; i < 5; ++i) alert(i);

/*
Use the for loop to output even numbers from 2 to 10.
We use the “modulo” operator % to get the remainder and check for the evenness here.
*/
for (i = 2; i <= 10; i += 2) alert(i);

//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
var i = 0;
while (i < 3) {
    alert('number ' + i + 'i');
    i++;
}