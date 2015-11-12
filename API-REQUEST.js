
/*group work (API FORM)
 //Take the JSON payload available from /r/aww (check with the instructor before using anything else) 
 //and use the data to create a “feed”. 
 //1. Break into small groups and delegate tasks. 
 //2. Look at the raw JSON to see how objects are organized. 
 //3. Create a webpage that pulls information from the payload.
//Create a "back to top" button that persists near the bottom of the screen and scrolls 
//(as opposed to jumps) back to the top of the page without reloading it.

*/
$(document).ready(function(){
//1.request = start a new function for .get (location, function())
$.get("http://www.reddit.com/r/aww/.json", function(response){
			console.log(response.data.children[0].data.title);
//2.Parse the object contents
			//console.log(response.data.children[0].data.author);
			//console.log(response.data.children[0].data.thumbnail);
			//console.log(response.data.children[0].data.url);
			//console.log(response.data.children[0].data.created);
//3.Display - Creat Element /// Append


var posts = response.data.children;

	$.each(posts, function(index, post){
	var $container = $("<div />").appendTo($('body'));
	var $title = $('<a />').html("<h1>" +post.data.title + "</h1>").appendTo($container)
	$title.attr('href', post.data.url);
	$('<img />').attr('src', post.data.thumbnail).appendTo($container)
	$('<p />').text(post.data.author).appendTo($container);//unix - epic time - a point in time as a singel number

	//turn epic time into a readable time
	var postDate = new Date(post.data.created * 1000);
	$('<p />').text("Posted: " + postDate.getMonth() + "/" +postDate.getDay()+ "/" +postDate.getFullYear()).appendTo($container); 

			});
    	});
	});

$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');



//4. after you display everything on the page turn it into a function


/*  
		The (console data) code below was used while we built the function
    //console.log(post.data.author);	
	//console.log(post.data.thumbnail);	
	//console.log(post.data.title);	
	//console.log(post.data.url);	
	//console.log(post.data.created);

	The Code below did not work
	var $div = $('body').append();
	var $title = $div.append("<a href='" +post.data.url+' "> Test </a>');
	
	$title.attr('href', post.url)
	$title.append ("<h1>" + post.title +"</h1>");
	$div.append ("img src='" +post.thumbnail+ " '> ");
	$div.append ("<p>" +post.author+ "</p>");
	
//$('<h1 />').text(This is a test);


	//$('body').append("<h1>" + post.title + '</h1>');*/



	
















