//Selectors
document.getElementById("id-name");
document.getElementsByClassName("classname");

$('element[name="value"]') //Select element by name attribute

document.querySelector(".classname || #id-name || element.classname || element['attribute'] || element,element");
document.querySelectorAll(".classname || #id-name || element.classname || element['attribute'] || element,element"); //Select all the elements with selector
$(".classname || #id-name || element.classname || element['attribute'] || element,element")

//Inner html
//for javascript use .innerHTML
//for jQuery use .html(), .text()

//its better to use .value or .val() to get or set input element values.
//use attr() to change data attribute values or use .data() if possible.

//Show hide elements
element.style.display = "block";
element.style.display = "none";
$('.classname or #id-name').show()
$('.classname or #id-name').hide()

//change attribute values
element.hasAttribute("attribute name"); // check if an attribute is present
element.setAttribute("href", "value"); //set an attribute and value
$('.classname or #id-name').attr("name", "value")

//check if checkbox or radio button is checked
$("element").is(':checked')
