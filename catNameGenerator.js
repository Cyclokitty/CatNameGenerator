$(document).ready(function() {

function quoter() {
  var nameList1 = ["Big", "Fat", "Sweet", "Little", "Rough", "Soft", "Fancy", "Tough", "Crazy", "Bon", "Jumpy", "Snuggly", "Brainy", "Fangs of", "Blue", "Spaghetti", "Clever", "Mini", "Big Red", "Rough", "The", "Sassy", "Salad", "Whiskey", "Ponyboy", "Lucky", "Moocher", "Sleepy", "Trasher", "Major", "Boo", "Admiral General", "Snacks Mc", "Half Life", "Racey", "Hip"];
  var nameList2 = ["Sal", "Louie", "Lulu", "Sassy", "Saison", "Freddie", "Lucy", "Camembert", "Zeke", "Ramon", "Zsa Zsa", "Francie", "Chip", "Hortence", "Fifi", "Pascal", "Gigi", "Rocky", "Rock", "Mouser", "Pip", "Swizzle Stick", "High Top", "Orangey", "Nutball", "Piedmont", "Piper", "Snazzy", "Ski", "Boo", "Punkin", "Roger", "Kirk", "Angel", "LeRoy"];

  var num1 = Math.ceil(Math.random() * (nameList1.length -1));
  var num2 = Math.ceil(Math.random() * (nameList2.length -1));
  var name1 = nameList1[num1];
  var name2 = nameList2[num2];
  var catName = name1 +' ' + name2;

//to check what names are repeating the most
  console.log(num1, num2)

  $(".catName").html(catName);
}
  $(".btn").on("click", quoter);


});
