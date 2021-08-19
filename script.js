function generate(){
var quotes = {

"- Caitlyn jenner":"I'm just going to go live life. I'm going to go enjoy life. I have nothing left to hide. I am kind of a free person, a free soul.",
"- John Galsworthy":'“Life calls the tune, we dance.”',
"-  C.S. Lewis":'“I was not born to be free---I was born to adore and obey.”'

}
var authors = Object.keys(quotes);
 var author = authors[Math.floor(Math.random()*authors.length)];

var quote = quotes[author] 
document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML=author;
}
