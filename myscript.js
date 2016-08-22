/* jQuery code */

// change all paragraphs to red and italic   
$("p").css(
		{
			"color": "red", 
			"font-style": "italic"
		}
);
/*change all h1 headings to blue and the text to "Hello", the chaining method is used below.
with the dot before text*/

$("h1").css("color", "blue").text("Hello");

