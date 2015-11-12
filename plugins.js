3/8*,16
*2$/6)257+,681,7 1. Review 2. Popular plugins 3. Incorporating plugins 4. Building plugins
5(9,(:
:+$7
6$3/8*,1" Plugins extend the functionality of jQuery by providing developers with additional methods that can be used on jQuery selections.
),1',1*$3/8*,1 Curb your urge to Google for just a moment and have a look at these lists of jQuery plugins: npm Sitepoint's Popular jQuery Plugins List Unheap
&+226,1*$3/8*,1 Some things to keep in mind when deciding whether or not a particular plugin is right for your project: How many times has it been downloaded? When was the last time it was updated? How many open issues are associated with it? How responsive are its publishers to issues and feature requests?
3238/$53/8*,16
/,*+7%2;
7+(2*2)/,*+7%2;3/8*,16 There are more plugins to display larger versions of images in a modal view than you could shake a stick at, but the original  is still a solid choice. Lightbox
'(02
$1,0$7,21
7+(1(:.,' There are plenty of plugins to make creating interactive animations easier. One popular (relative) newcomer to the game is . animatedModal.js
'(02
'(02 Animate a modal!
-48(5<8,
6,67(56":(
5(&/26( is a sister project to jQuery. It has a wide variety of user interface functionality that layers on top of jQuery itself. jQuery UI
7+('2:1/2$'%8,/'(5 jQuery UI gives us a ton of options to keep our site as light as possible. Using the , we can specify only the interactions, widgets, and effects we actually need. Download Builder
&5($7,1*$3/8*,1
:+<&5($7($3/8*,1" Plugins can be reused to accomplish the same task many times within the same project. Plugins can also (obviously) be packaged up and shared with the world to be used in many different projects. They're a way to give back to the community.
3527(&77+(1$0(63$&( We can avoid namespace collisions caused by different scripts using the same variable name(s) by wrapping our plugin scripts in an IIFE.
:+$7
67+$7" IIFE stands for Immediately Invoked Function Expression. You've probably seen at least one before and accepted that it worked because we told you it did. Now you know what they're for.
$127(2138%/,6+,1* If you decide to up your game and publish your jQuery plugin, please note that the jQuery plugin registry now suggests that publishers use npm. Refer to this  for quick and dirty instructions if you're interested in learning more. npm blog post

,16758&725'(02 :$/.7+528*+&5($7,1*$ 3/8*,1
/$% %8,/'$3/8*,1
,16758&7,216 Create your own jQuery plugin based on the steps we've discussed. 1. Determine what task(s) your plugin will make easier. 2. Add your method(s) to jQuery. 3. Return a jQuery object so that other methods can be chained with yours. Remember to protect the namespace!
),*85(,7287 Choose a JavaScript library and use it to create a widget that can be added to a web page. (;$03/(6 Leaflet ChessboardJS Bounce.js Please Shepherd