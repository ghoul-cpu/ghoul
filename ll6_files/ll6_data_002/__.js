var ChatV;
var ChatClassCode;
if(typeof ChatType == 'undefined' || ChatType != 2){
    if(typeof ChatV_Client == 'undefined')
        ChatV = '8.0.8';
    else
        ChatV = ChatV_Client;
    ChatType = 'Client' + '_';
	ChatClassCode = 'chat.client.ChatApplet';
} else {
    if(typeof ChatV_Master == 'undefined')
        ChatV = '8.9.9.4';
    else
        ChatV = ChatV_Master;
    ChatType = 'ChatMaster' + '_';
	ChatClassCode = 'chat.chatmaster.ChatMasterApplet';
}

    document.write('<APPLET NAME="Chat" CODEBASE="http://' + ChatServer + '/DigiChat/DigiClasses/" CODE="' + ChatClassCode + '" ');
    document.write('HEIGHT="' + ChatHeight + '" WIDTH="' + ChatWidth + '" ALIGN="MIDDLE" ');
    document.write('ARCHIVE="' + ChatType + '' + ChatV + '.jar" MAYSCRIPT>');
    document.write('<PARAM NAME="cabbase" value="' + ChatType + '' + ChatV + '.cab" />');
    if(typeof ChatSiteID != 'undefined')
        document.write('<PARAM NAME="SiteID" VALUE="' + ChatSiteID + '" />');
    document.write('<PARAM NAME="background" VALUE="' + ChatBackground + '" />');
    document.write('<PARAM NAME="textcolor" VALUE="' + ChatTextColor + '" />');
    if(typeof ChatLanguage != 'undefined')
        document.write('<PARAM NAME="language" VALUE="' + ChatLanguage + '.lang" />');
    else
        document.write('<PARAM NAME="language" VALUE="en.lang" />');
    if(typeof ChatPorts != 'undefined' && ChatPorts != '')
        document.write('<PARAM NAME="ports" VALUE="' + ChatPorts + '" />');
    if(typeof ChatMenu != 'undefined'){
        var Link_ID= 1;
        for(Link_temp in ChatMenu){
            document.write('<PARAM NAME="MenuItem' + Link_ID+ '" VALUE="' + Link_temp + '" />');
            document.write('<PARAM NAME="MenuLocation' + Link_ID+ '" VALUE="'+ ChatMenu[Link_temp] +'" />');
            Link_ID++;
        }
    }
   
    document.write('DigiChat requires a Java Compatible web browser to run.');
    document.write('</APPLET>');

