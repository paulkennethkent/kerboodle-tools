ua=navigator.userAgent;

function browser_info () {
var N=navigator.appName, tem;
var M=ua.match(/(Edge|opera|CriOS|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];

if(M[0] == "CriOS")
{
	this.browser = "Chrome For iPad ";
} else {
	if (ua.indexOf("Edge") > -1)
	{
		this.browser = "Edge";
	} else {
	this.browser = M[0];
	}
}
this.browser_version = M[1];
} 

//****************************************************************************

function OS_info () {

var oses = [];
var oses = {
'Win311':'Win16',
'Win95':'(Windows 95)|(Win95)|(Windows_95)',
'WinME':'(Windows 98)|(Win 9x 4.90)|(Windows ME)',
'Win98':'(Windows 98)|(Win98)',
'WinNT':'(Windows NT 4.0)|(WinNT4.0)|(WinNT)|(Windows NT)',
'Win2000':'(Windows NT 5.0)|(Windows 2000)',
'WinXP':'(Windows NT 5.1)|(Windows XP)',
'WinServer2003':'(Windows NT 5.2)',
'WinVista':'(Windows NT 6.0)',
'Windows 7':'(Windows NT 6.1)',
'Windows 8':'(Windows NT 6.2)|(Windows NT 6.3)',
'Windows 10':'(Windows NT 10.0)|(Windows Phone 10.0)',
'OpenBSD':'OpenBSD',
'SunOS':'SunOS',
'Ubuntu':'Ubuntu',
'Linux':'(Linux)|(X11)',
'Android':'Android',
'iPhone':'iPhone',
'iPad':'iPad',
'MacOS':'(Mac_PowerPC)|(Macintosh)',
'QNX':'QNX',
'BeOS':'BeOS',
'OS2':'OS/2',
'SearchBot':'(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves/Teoma)|(ia_archiver)'
    };
var OStemp = "Unknown";
var versiontemp = "Unknown";
   $.each(oses, function(k, v) {
    if (ua.match(v))
       {OStemp = k;}
   });
   this.OS = OStemp;
   
   switch (OStemp)
{
case 'MacOS':
	var M1=ua.match(/Intel Mac OS X ([0-9]*)(.|_)([0-9]*)/);		
	switch(M1[3])
	{
	case '4':
	   versiontemp = "10.4 Tiger"; 	   
	break;
	case '5':
	   versiontemp = "10.5 Leopard";	   
	break;
	case '6':
	   versiontemp = "10.6 Snow Leopard"; 	   
	break;
	case '7':
	   versiontemp = "10.7 Lion"; 	   
	break;
	case '8':
	   versiontemp = "10.8 Mountain Lion"; 	   
	break;
	case '9':
	   versiontemp = "10.9 Mavericks"; 	   
	   break;
	case '10':
	   versiontemp = "10.10 Yosemite"; 	   
	   break; 
	break;
	default:
	versiontemp = M1[1] + "." + M1[3];	
	}
break;
case 'iPad':
case 'iPhone':
	var M1=ua.match(/ OS ([0-9]*)(.|_)([0-9]*)(.|_)([0-9]*)/);	
	versiontemp=M1[1]+ "." + M1[3];	
break;
case 'Android': 
	var M1=ua.match(/Android (\d+(?:\.\d+)+)[;)]/);	
	versiontemp=M1[1];	
break;
default:

}
 this.OS_version = versiontemp;  
  
}
// *******************************************************************************

function areCookiesEnabled() {
    var cookieEnabled = navigator.cookieEnabled;
	var cookietemp;
    // When cookieEnabled flag is present and false then cookies are disabled.
    if (cookieEnabled === false) {
        cookietemp = false;
    }

    // try to set a test cookie if we cant see any cookies and we're using 
    // either a browser that doesn't support navigator.cookieEnabled
    // or IE (which always returns true for navigator.cookieEnabled)
    if (!document.cookie && (cookieEnabled === null || /*@cc_on!@*/false))
    {
        document.cookie = "testcookie=1";

        if (!document.cookie) {
            return false;
        } else {
            document.cookie = "testcookie=; expires=" + new Date(0).toUTCString();
        }
    }

    cookietemp = true;
    this.CookieOn = cookietemp;
}
