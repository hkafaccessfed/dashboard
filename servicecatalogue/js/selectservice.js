// JavaScript Document

var xmlhttp;

function showService(str)
{
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
  {
  alert ("Browser does not support HTTP Request");
  return;
  }
var url="/wp-content/themes/pyrmont-v2/scat_col_2.php";
url=url+"?q="+str;
url=url+"&sid="+Math.random();
xmlhttp.onreadystatechange=state1Changed;
xmlhttp.open("GET",url,true);
xmlhttp.send(null);
}

function state1Changed()
{
if (xmlhttp.readyState==4)
{
document.getElementById("txtService").innerHTML=xmlhttp.responseText;
}
}

function GetXmlHttpObject()
{
if (window.XMLHttpRequest)
  {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  return new XMLHttpRequest();
  }
if (window.ActiveXObject)
  {
  // code for IE6, IE5
  return new ActiveXObject("Microsoft.XMLHTTP");
  }
return null;
}


