document.write(5 > 4); //Obviously, true.
document.write("</br>");
document.write("apple" > "pineapple"); //Dictionary comparison, hence false.
document.write("</br>");
document.write("2" > "12"); //Again, dictionary comparison, first char of "2" is greater than the first char of "1".
document.write("</br>");
document.write(undefined == null); //Values null and undefined equal each other only.
document.write("</br>");
document.write(undefined === null); //Strict equality is strict. Different types from both sides lead to false.
document.write("</br>");
document.write(null == "\n0\n"); //Similar to (4), null only equals undefined.
document.write("</br>");
document.write(null === +"\n0\n"); //Strict equality of different types.