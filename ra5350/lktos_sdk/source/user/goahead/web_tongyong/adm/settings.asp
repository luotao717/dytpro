<html>
<head>
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="-1">
<meta http-equiv="Content-Type" content="text/html; charset=<% getCharset(); %>">
<link rel="stylesheet" href="../style/normal_ws.css" type="text/css">
<script language="javascript" src="../js/language_<% getCfgZero(1, "LanguageType"); %>.js"></script>
<script language="javascript" src="../js/common.js"></script>
<script language="javascript">
function reloadfileCheck()
{
	var str=document.ImportSettings.filename.value;
	if (str == "") { 
		alert(JS_msg7);
		return false;
	} 
	
	if (str.toLowerCase().indexOf(".dat") == -1) {
		alert(JS_msg8);
		return false;
	}
	return true;
}

function addrCheck()
{
	if (!isBlankMsg(document.set_firmware_update_url.Firmware_Update_Url.value, MM_firmware_update_url)) {
		return false;
    }
	
	return true;
}

function log_record_upload_url_Check()
{
	if (!isBlankMsg(document.set_log_record_upload_url.Log_Record_Upload_Url.value, MM_log_record_upload_url)) {
		return false;
    }
	
	return true;
}

function firstte_assistant_url_Check()
{
	if (!isBlankMsg(document.set_firstte_assistant_update_url.Firstte_Assistant_Update_Url.value, MM_firstte_assistant_update_url)) {
		return false;
    }
	
	return true;
}

function apk_update_url_Check()
{
    if (!isBlankMsg(document.set_apk_update_url.Apk_Update_Url.value, MM_apk_update_url)) {
        return false;
    }
	
	return true;
}

function numCheck()
{
	if (!isNumberRange(document.update_time_interval.Time_Upload_Interval.value, 1, 120))  {
        alert(MM_time_upload_interval + JS_msg120);
		return false;
    }
    else	
	    return true;
}

function resetClick()
{
	if ( !confirm(JS_msg11) )
		return false;
	else
		return true;
}

function rebootClick()
{
	if ( !confirm(JS_msg87) ) 
		return false;
	else
		return true;
}
</script>
</head>
<body class="mainbody">
<blockquote>
<table width=700><tr><td>
<table width=100% border=0 cellpadding=3 cellspacing=1> 
<tr><td class="title"><script>dw(MM_sysconfig)</script></td></tr>
<tr><td><script>dw(JS_msg_settings)</script></td></tr>
<tr><td><hr></td></tr>
</table>
<br>
<table width=100% border=0 cellpadding=3 cellspacing=1> 
<form method="post" name="ExportSettings" action="/cgi-bin/ExportSettings.sh">
  <tr>
    <td class="thead"><script>dw(MM_save_config_file)</script>:</td>
    <td><script>dw('<input type="submit" class=button3 value="'+BT_save+'" name="Export">')</script></td>
  </tr>
</form>

<form method="post" name="ImportSettings" action="/cgi-bin/upload_settings.cgi" enctype="multipart/form-data">
  <tr>
    <td class="thead"><script>dw(MM_update_config_file)</script>:</td>
    <td><input type="File" name="filename" size="20" maxlength="256"> <script>dw('<input type=submit class=button3 value="'+BT_update+'" onClick="return reloadfileCheck()">')</script></td>
  </tr>
</form>

<form method="post" name="LoadDefaultSettings" action="/goform/LoadDefaultSettings">
  <tr>
    <td class="thead"><script>dw(MM_load_factory_default)</script>:</td>
    <td><script>dw('<input type="submit" class=button3 value="'+BT_restore_default+'" name="LoadDefault" onClick="return resetClick()">')</script></td>
  </tr>
</form>

<form method="post" name="set_firmware_update_url" action="/goform/setFirmwareUpdateUrl">
<input type="hidden" name="submit-url" value="/adm/settings.asp">
<tr>
  <td class="thead"><script>dw(MM_firmware_update_url)</script>:</td>
  <td><input type="text" size="30" name="Firmware_Update_Url" value="<% getCfgGeneral(1, "Firmware_Update_Url"); %>">&nbsp;<script>dw('<input type=submit class=button3 value="'+BT_update+'" onClick="return addrCheck()">')</script>
</td>
</tr>
</form>


<form method="post" name="set_log_record_upload_url" action="/goform/setLogRecordUploadUrl">
<input type="hidden" name="submit-url" value="/adm/settings.asp">
<tr>
  <td class="thead"><script>dw(MM_log_record_upload_url)</script>:</td>
  <td><input type="text" size="30" name="Log_Record_Upload_Url" value="<% getCfgGeneral(1, "Log_Record_Upload_Url"); %>">&nbsp;<script>dw('<input type=submit class=button3 value="'+BT_update+'" onClick="return log_record_upload_url_Check()">')</script>
</td>
</tr>
</form>

<form method="post" name="set_firstte_assistant_update_url" action="/goform/setFirstteAssistantUpdateUrl">
<input type="hidden" name="submit-url" value="/adm/settings.asp">
<tr>
  <td class="thead"><script>dw(MM_firstte_assistant_update_url)</script>:</td>
  <td><input type="text" size="30" name="Firstte_Assistant_Update_Url" value="<% getCfgGeneral(1, "Firstte_Assistant_Update_Url"); %>">&nbsp;<script>dw('<input type=submit class=button3 value="'+BT_update+'" onClick="return firstte_assistant_url_Check()">')</script>
</td>
</tr>
</form>

<form method="post" name="set_apk_update_url" action="/goform/setApkUpdateUrl">
<input type="hidden" name="submit-url" value="/adm/settings.asp">
<tr>
  <td class="thead"><script>dw(MM_apk_update_url)</script>:</td>
  <td><input type="text" size="30" name="Apk_Update_Url" value="<% getCfgGeneral(1, "Apk_Update_Url"); %>">&nbsp;<script>dw('<input type=submit class=button3 value="'+BT_update+'" onClick="return apk_update_url_Check()">')</script>
</td>
</tr>
</form>

<form method="post" name="update_time_interval" action="/goform/setUpdateTimeInterval">
<input type="hidden" name="submit-url" value="/adm/settings.asp">
<tr>
  <td class="thead"><script>dw(MM_time_upload_interval)</script>:</td>
+  <td><input type="text" size="5" name="Time_Upload_Interval" value="<% getCfgGeneral(1, "Time_Upload_Interval"); %>"><script>dw(MM_sec)</script>&nbsp;<script>dw('<input type=submit class=button3 value="'+BT_update+'" name="update" onClick="return numCheck()">')</script>
</td>
</tr>
</form>

<form method="post" name="RebootSystem" action="/goform/RebootSystem">
  <tr>
    <td class="thead"><script>dw(MM_reboot_device_system)</script>:</td>
    <td><script>dw('<input type="submit" class=button3 value="'+BT_reboot+'" name="Reboot" onClick="return rebootClick()">')</script></td>
  </tr>
</form>
</table>

</td></tr></table>
</blockquote>
</body></html>
