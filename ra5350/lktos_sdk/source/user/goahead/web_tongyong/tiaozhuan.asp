<HTML>
<!-- Copyright (c) Go Ahead Software Inc., 1994-2000. All Rights Reserved. -->
<HEAD>
<TITLE>GoAhead WebServer</TITLE>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html">
<script language="JavaScript" type="text/javascript">
var first = 0;

function initLanguage()
{

}

function initpage()
{
	document.location.href="<% getCfgGeneral(1, "Box_Push_Url"); %>";
	//document.location.href="http://192.168.169.1:8089/cgi-bin/Ass1auto.cgi";

}

function wanDetectSubmit()
{
    if(0 == first)
    {
    http_request = false;
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }
    if (!http_request) {
        if(language == 'en')
            alert('Cannot create an XMLHTTP instance');
		else
			alert("放弃，不能创建XMLHTTP实例.");
        return false;
        return false;
    }

    http_request.open('POST', '/goform/setAccess', true);
    http_request.send('n\a');

	first = first +1;
    }
}

function onInit()
{
//	initLanguage();
	wanDetectSubmit();
		initpage();
}

//setInterval("wanDetectSubmit()",5000);

</script>
</HEAD>

<body BGCOLOR="#FFFFFF" onLoad="onInit()">
    <div>
    <!--
    <p>
    <span style="font-size:32px;">Wellcom! Wellcom! Wellcom!</span><br />
    </p> 
    -->
    </div>
</body>
</HTML>
