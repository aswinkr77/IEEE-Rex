/********** Pre-loader Animation jQuery **********/

$(window).on("load", function()
{
    setTimeout(removeLoader, 1500); //wait for page load + 1.5 seconds.
});

function removeLoader()
{
    $("#loadingDiv").fadeOut(500, function() 
    {	
        // fadeOut complete. Remove the loading div	
        $( "#loadingDiv" ).remove(); //makes page more lightweight 	
    }); 	
}

/************************************************/


/********** Dropdown Menu - Dropdown button **********/

var dropBtn = 0;

function dropFunction()
{
    dropBtn++;

    if(dropBtn%2 == 0)
    {
        document.getElementById("toggleButton").classList.remove("cross");
        document.getElementById("drop-content").classList.remove("show-menu");
        document.getElementById("drop-content").classList.add("retract-menu");
    }
    else
    {
        document.getElementById("toggleButton").classList.add("cross");
        document.getElementById("drop-content").classList.add("show-menu");
        document.getElementById("drop-content").classList.remove("retract-menu");
    }

    if(dropBtn == 2)
    {
        dropBtn = dropBtn - 2;
    }
}

window.addEventListener("click", function(e)
{
    if(!document.getElementById("toggleButton").contains(e.target))
    {
        document.getElementById("toggleButton").classList.remove("cross");
        document.getElementById("drop-content").classList.remove("show-menu");
        document.getElementById("drop-content").classList.add("retract-menu");
        dropBtn = 0;
    } 
})

/******************************************************/


/********** Fixed button -> To the Top **********/

mybutton = document.getElementById("myBtn");

window.onscroll = function(){scrollFunction()};

function scrollFunction() 
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        mybutton.style.display = "block";
    }
    else
    {
        mybutton.style.display = "none";
    }
}

/***********************************************/

/********** Events Register Now Buttons **********/

document.getElementById("btn1").onclick = function(){
    alert("Registration Closed");
}

document.getElementById("btn2").onclick = function(){
    alert("Registration Closed");
}

document.getElementById("btn3").onclick = function(){
    alert("Registration Closed");
}

document.getElementById("btn4").onclick = function(){
    alert("Registration Closed");
}

/*************************************************/


/********** Virtual Tour Register Now Button **********/

document.getElementById("virtualbtn").onclick = function(){
    alert("Registration Closed");
}

/*************************************************/

/********** Speakers Register Now Buttons **********/

function speaker1()
{
    alert("Registration Closed");
}

function speaker2()
{
    alert("Registration Closed");
}

/************************************************/