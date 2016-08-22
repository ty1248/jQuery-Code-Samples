/*
 * jQuery selectors are used to locate any code element on an HTML Page.
 * A tool to do this on any HTML page is to go to www.selectorgadget.com.  On
 * that page you will see a link which says "Selector Gadget".  Click and drag
 * that link into the bookmark tab that is at the top of the page to the right of
 * the browser search bar.  Then click and open the bookmark button and you will
 * find a symbol to click and activate the selector gadget.
 * 
 *
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
//$("*").css("background-color", "yellow");

// all p elements
//$("p").css("background-color", "yellow");

// the p element with an ID of "intro"
//$("p#intro").css("background-color", "yellow");

// all elements with a class of "note"
//$(".note").css("background-color", "yellow");

// all DIV elements with a class of note
//$("div.note").css("background-color", "yellow");

// all p elements in the article element
//$("article p").css("background-color", "yellow");

// the last element in any section which is a p tag
//$("p:last-child").css("background-color", "yellow");

// the first paragraph on the page
//$("p:first").css("background-color", "yellow");

// all p elements which a link
//$("p").has("a").css("background-color", "yellow");

// the second li within nested ul element
//$("ul ul li").eq(1).css("background-color", "yellow");

// every second and third p element
//$("p").filter(function(i) { return (i % 3);}).css(
//"background-color", "yellow");