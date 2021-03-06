﻿// JavaScript Document
function dw(key) {document.write(key);}
//-----------------------------------------
var BT_apply = "Apply";
var BT_reset = "Reset";
var BT_close = "Close";
var BT_update = "Update";
var BT_upgrade = "Upgrade";
var BT_reboot = "Reboot";
var BT_restore_default = "Restore to Factory";
var BT_clone_mac = "Clone MAC Address";	
var BT_default_mac = "Default MAC Address";
var BT_refresh = "Refresh";
var BT_cancel = "Cancel";
var BT_save = "Save";
var BT_add = "Add";
var BT_clone = "Clone";
var BT_clear = "Clear";
var BT_search_ap = "Search AP";
var BT_delete = "Delete";
var BT_generate = "Generate";
var BT_start = "Start";
var BT_scan = "Scan";
var BT_remove = "Remove";
var BT_security_setting = "Security Settings";
var BT_login = "Login";
var BT_auto_detects = "Automatically detects";
//----------------------------------
var MM_add = "Add";
var MM_delete = "Delete";
var MM_adm_login = "Administrator Login";
var MM_disable_wlan = "Disable Wireless";
var MM_mac_passthrough = "MAC Passthrough";
var MM_language = "Select Language";
var MM_chinese = "简体中文";
var MM_english = "English";
var MM_dhcppool = "DHCP Pool";
var MM_cur_status = "Current Status";
var MM_easywizard = "Easy Wizard";
var MM_sysstatus = "System Status";
var MM_wireless = "Wireless";
var MM_service_settings = "Service Set"; //for
var MM_basic_settings = "Basic Settings";
var MM_security_settings = "Security Settings";
var MM_advanced_settings = "Advanced Settings";
var MM_client_list= "Client List";
var MM_network = "Network";
var MM_wan_settings = "WAN Settings";
var MM_lan_settings = "LAN Settings";
var MM_dhcp_server = "DHCP Server";
var MM_firewall = "Firewall";
var MM_service = "Service";
var MM_vserver = "Virtual Server";
var MM_vserver_settings = "Virtual Server Settings";
var MM_port_forwarding = "Port Forwarding";
var MM_port_forwarding_settings = "Port Forwarding Settings";
var MM_dmz_settings = "DMZ Settings";
var MM_ddns_settings = "DDNS Settings";
var MM_management = "Management";
var MM_admin_settings = "Administrator Settings";
var MM_firmware = "Upgrade Firmware";
var MM_sysconfig = "System Configuretion";
var MM_ntp_settings = "NTP Settings";
var MM_sys_remote = "Remote Management Settings";
var MM_remote = "Remote Management";
var MM_syslog = "System Log";
var MM_statistics = "Traffic Statistics";
var MM_ipaddr = "IP Address";
var MM_submask = "Subnet Mask";
var MM_default_gateway = "Default Gateway";
var MM_domainname = "Domain Name";
var MM_optional = "Optional";
var MM_enable = "Enable";
var MM_disable = "Disable";
var MM_auto = "Auto";
var MM_hostname = "Host Name";
var MM_dhcp = "DHCP(Auto Config)";
var MM_staticip = "Static IP (fixed IP)";
var MM_pppoe = "PPPoE (ADSL)";
var MM_macaddr = "MAC Address";
var MM_pridns = "Primary DNS";
var MM_secdns = "Secondary DNS";
var MM_username = "User Name";
var MM_password = "Password";
var MM_conpassword = "Confirm Password";
var MM_connect_mode = "Connection Mode";
var MM_keep_alive = "Keep Alive";
var MM_manual = "Manual";
var MM_ondemand = "On Demand";
var MM_none = "None";
var MM_cur_firmware = "Firmware Version";
var MM_firmware_date = "Firmware Date";
var MM_select_firmware_file = "Select firmware file";
var MM_custom = "Custom";
var MM_port = "Port";
var MM_function = "Function";
var MM_cur_time = "Current Time";
var MM_sync_time = "Sync with host";
var MM_time_zone = "Time Zone";
var MM_ntp_server = "NTP Server";
var MM_ntp_time = "NTP Sync time";
var MM_discard_wanping = "Disallow Ping form WAN Filter";
var MM_dmz_host_ip = "Host IP Address";
var MM_provider = "Server Provider";
var MM_register = "To register";
var MM_comment = "Comment";
var MM_protocol = "Protocol";
var MM_pub_port = "Public Port";
var MM_pri_port = "Private Port";
var MM_vserver_list = "Current Virtual Server List";
var MM_port_forwarding_list = "Current Port Forwarding List";
var MM_url_address = "URL(keyword)";
var MM_urlf = "URL Filter";
var MM_add_url_filter = "Add a URL(keyword) Filter";
var MM_urlf_list = "Current URL Filter List";
var MM_portrange = "Port Range";
var MM_source = "Source";
var MM_default_policy = "Default Policy";
var MM_allow = "Allow Listed";
var MM_action = "Action";
var MM_sourceip = "Source IP";
var MM_destip = "Destination IP";
var MM_security_mode = "Security Mode";
var MM_notes = "Security encryption recommend";
var MM_internet_settings = "Internet Settings";
var MM_wireless_settings = "Wireless Settings";
var MM_connection = "Connection Type";
var MM_uptime = "Uptime";
var MM_system = "System Configration";
var MM_channel = "Channel";
var MM_network_mode = "Network Mode";
var MM_band = "Band";
var MM_wireless_iface = "Wireless Interface Configration";
var MM_wan_iface = "WAN Interface Configration";
var MM_lan_iface = "LAN Interface Configration";
var MM_wireless_repeater_iface = "Wireless Repeater Interface Configration";
var MM_expired_time = "Expired Time";
var MM_sipaddr = "Start IP Address";
var MM_eipaddr = "End IP Address";
var MM_lease_time = "Lease Time";
var MM_dhcp_server_settings = "DHCP Server Settings";
var MM_static_dhcp = "Static DHCP";
var MM_static_dhcp_settings = "IP/MAC Banding Settings";
var MM_static_dhcp_list = "IP/MAC Banding List";
var MM_station_list = "Station List";
var MM_bgp_mode = "BG Protection Mode";
var MM_on = "On";
var MM_off = "Off";
var MM_data_rate = "Basic Data Rate";
var MM_beacon = "Beacon Interval";
var MM_data_beacon_rate = "Data Beacon Rate";
var MM_fragment = "Fragment Threshold";
var MM_rts = "RTS Threshold";
var MM_tx_tower = "TX Power";
var MM_short_preamble = "Short Preamble";
var MM_short_slot = "Short Slot";
var MM_tx_burst = "Tx Burst";
var MM_pkt_agg = "Pkt_Aggregate";
var MM_ieee802_11h = "IEEE 802.11H Support";
var MM_2040_coexit = "20/40 Coexistence";
var MM_aband = "only in A band";
var MM_range = "range";
var MM_default = "default";
var MM_wifi_multimedia_settings = "Wi-Fi Multimedia Settings";
var MM_wmm_capable = "WMM Capable";
var MM_apsd_capable = "APSD Capable";
var MM_wmm_parameters = "WMM Parameters";
var MM_wmm_configureation = "WMM Configuration";
var MM_wmm_parameters_ap = "WMM Parameters of Access Point";
var MM_wmm_parameters_station = "WMM Parameters of Station";
var MM_apclient_settings = "AP Client Settings";
var MM_auth_mode = "Authentication Mode";
var MM_wep_key = "WEP Key";
var MM_wpa_key = "WPA Key";
var MM_key = "Key";
var MM_default_key = "Default Key";
var MM_wep_open_system = "WEP(Open System)";
var MM_wep_shared_key = "WEP(Shared Key)";
var MM_wep_auto = "WEP(Auto)";
var MM_wpa_alg = "WPA Algorithms";
var MM_passphrase = "Pass Phrase";
var MM_wireless_mac = "MAC Authentication";
var MM_wireless_mac_list = "MAC Authentication List";
var MM_multiple = "Multiple";
var MM_multiple_settings = "Multiple AP Settings";
var MM_broadcast_ssid = "Broadcast Network Name";
var MM_wds_settings = "WDS Settings";
var MM_wds_mode = "WDS Mode";
var MM_lazy_mode = "Lazy Mode";
var MM_bridge_mode = "Bridge Mode";
var MM_repeater_mode = "Repeater Mode";
var MM_encryp_key = "Encryp Key";
var MM_encryp_type = "Encryp Type";
var MM_ht_phy_mode = "HT Physical Mode";
var MM_nopmode = "Operating Mode";
var MM_bandwidth = "Channel BandWidth";
var MM_guard_interval = "Guard Interval";
var MM_stbc = "STBC";
var MM_long = "Long";
var MM_rdg = "Reverse Direction Grant";
var MM_ext_channel = "Extension Channel";
var MM_amsdu = "Aggregation MSDU (A-MSDU)";
var MM_mixed_mode = "Mixed Mode";
var MM_green_field = "Green Field";
var MM_select_ssid = "Select SSID";
var MM_enterprise = "Enterprise";
var MM_pre_auth = "Pre-Authentication";
var MM_pmk_cache_period = "PMK Cache Period";
var MM_key_renewal_method = "Key Renewal Method";
var MM_key_renewal_interval = "Key Renewal Interval";
var MM_time = "Time";
var MM_seconds = "seconds";
var MM_minutes = "minutes";
var MM_radius_server = "RADIUS Server";
var MM_shared_secret = "Shared Secret";
var MM_session_time_out = "Session Time Out";
var MM_idle_time_out = "Idle Time Out";
var MM_configured = "Configured";
var MM_wps_configuration = "WPS Configuration";
var MM_yes = "Yes";
var MM_no = "No";
var MM_unknown = "Unknown";
var MM_wps_settings = "WPS Settings";
var MM_wps_status = "WPS Status";
var MM_wps_cur_status = "WPS Current Status";
var MM_pincode = "PIN Code";
var MM_mode = "Mode";
var MM_tx_rate = "TX Rate";
var MM_phy_mode = "Phy Mode";
var MM_auto_select ="Auto Select";
var MM_sys_platform = "System Platform";
var MM_opmode = "Operation Mode";
var MM_memory_info = "Memory Information";
var MM_memory_total = "Memory total";
var MM_memory_left = "Memory left";
var MM_rx_packets = "Rx packets";
var MM_tx_packets = "Tx packets";
var MM_rx_bytes = "Rx bytes";
var MM_tx_bytes = "Tx bytes";
var MM_sys_firewall = "System Firewall";
var MM_sys_firewall_settings = "System Firewall Settings";
var MM_block_port_scan = "Block Port Scan";
var MM_block_syn_flood = "Block Syn Flood";
var MM_spi_firewall = "SPI Firewall";
var MM_content_filter = "Content Filter";
var MM_web_content_filter = "Web Content Filter";
var MM_1st_port = "1st Port";
var MM_2nd_port = "2nd Port";
var MM_ipportf_settings = "MAC/IP/Port Filter Settings";
var MM_ipportf = "MAC/IP/Port Filter";
var MM_ipportf_list = "Current MAC/IP/Port Filter List";
var MM_sport_range = "Source Port Range";
var MM_drop = "Drop";
var MM_accept = "Accept";
var MM_add_ipport_filter = "Add MAC/IP/Port Filter";
var MM_pktcnt = "PktCnt";
var MM_country_code = "Country/Zone Code";
var MM_hidden = "Hidden";
var MM_isolated = "Isolated";
var MM_other_settings = "Other Settings";
var MM_8021d_tree = "802.1d Spanning Tree";
var MM_igmp_proxy = "IGMP proxy";
var MM_router_advertisement = "Router Advertisement";
var MM_pppoe_relay = "PPPOE relay";
var MM_dns_proxy = "DNS proxy";
var MM_l2tp_passthrough = "L2TP passthrough";
var MM_ipsec_passthrough = "IPSec passthrough";
var MM_pptp_passthrough = "PPTP passthrough";
var MM_gateway_address = "Gateway Address";
var MM_interface = "Interface";
var MM_routing_table = "Routing Table";
var MM_routing_table_list = "Current Routing Table List";
var MM_host = "Host";
var MM_net = "Net";
var MM_flags = "Flags";
var MM_redial_period = "Redial Period";
var MM_idle = "Idle";
var MM_idle_time = "Idle Time";
var MM_server_ipaddr = "Server IP address";
var MM_static = "Static";
var MM_dynamic = "Dynamic";
var MM_address_mode = "Address Mode";
var MM_qos = "Quality of Service";
var MM_qos_settings = "QoS Settings";
var MM_gateway_mode = "Gateway Mode";
var MM_apclient_mode = "AP Client Mode";
var MM_wisp_mode = "Wireless ISP Mode";
var MM_tcp_timeout = "TCP Timeout";
var MM_udp_timeout = "UDP Timeout";
var MM_inic_mii_mode = "INIC Mii Mode";
var MM_bootloader_file = "Bootloader file";
var MM_deny = "Deny Listed";
var MM_ascii = "ASCII";
var MM_hex = "Hex";
var MM_settings_wizard = "Easy Wizard";
var MM_wsc_failed = "WSC failed";
var MM_wsc_success = "WSC Success";
var MM_united_states = "United States";
var MM_japan = "Japan";
var MM_france = "France";
var MM_taiwan = "Chinese Taipei";
var MM_brazil = "Brazil";
var MM_hongkong = "Hong Kong";
var MM_china = "China";
var MM_site_survey_table = "Site Survey Table";
var MM_select = "Select";
var MM_storage = "Storage";
var MM_user = "User Settings";
var MM_disk = "Disk Settings";
var MM_ftp = "FTP Server";
var MM_samba = "Samba Server";
var MM_media = "Media Server";
var MM_day = "Day";
var MM_days = "Days";
var MM_hour = "hour";
var MM_min = "min";
var MM_sec = "sec";
var MM_sun = "Sun.";
var MM_mon = "Mon.";
var MM_tue = "Tue.";
var MM_wed = "Wed.";
var MM_thu = "Thu.";
var MM_fri = "Fri.";
var MM_sat = "Sat.";
var MM_auto_block_ack = "Auto Block ACK";
var MM_decline_ba_request = "Decline BA Request";
var MM_ht_disallow_tkip = "HT Disallow TKIP";
var MM_wireless_status = "Wireless Status";
var MM_oned = "WiFi ON";
var MM_offed = "WiFi OFF";
var MM_wps_mode = "WPS Mode";
var MM_ssid = "Network Name(SSID)";
var MM_ddns_disable = "DDNS is disabled";
var MM_ddns_fail = "DDNS update fail";
var MM_ddns_success = "DDNS update success";
var MM_update_config_ok = "Update config file successfully! rebooting....";
var MM_update_firmware_ok = "Upgrade firmware successfully! rebooting....";
var MM_load_factory = "Load factory default....";
var MM_reboot_system = "Rebootting system....";
var MM_set_wizard_ok = "Set wizard successfully....";
var MM_force_upgrade_via = "Force upgrade via memory";
var MM_update_from_usb_disk = "Update From USB Disk";
var MM_ftp_srv_settings = "FTP Server Settings";
var MM_ftp_name = "FTP Server Name";
var MM_ftp_anonymous_login = "Anonymous Login";
var MM_ftp_port = "FTP Port";
var MM_ftp_max_sessions = "Max Sessions";
var MM_ftp_create_dir = "Create Directory";
var MM_ftp_rename_file_dir = "Rename File/Directory";
var MM_ftp_remove_file_dir = "Remove File/Directory";
var MM_ftp_readfile = "Read File";
var MM_ftp_writefile = "Write File";
var MM_ftp_download_capability = "Download Capability";
var MM_ftp_upload_capability = "Upload Capability";
var MM_smb_settings = "Samba Server Settings";
var MM_workgroup = "Workgroup";
var MM_netbios = "NetBIOS Name";
var MM_sharing_dir_list = "Sharing Directory List";
var MM_dir_name = "Directory Name";
var MM_dir_path = "Directory Path";
var MM_allows_users = "Allows Users";
var MM_add_smb_settings = "Add Samba Server";
var MM_edit_smb_settings = "Modify Samba Server";
var MM_access_user = "Access User";
var MM_access_path = "Access Path";
var MM_path = "Path";
var MM_partition = "Partition";
var MM_allow_to_use_ftp = "Allow to use FTP";
var MM_allow_to_use_smb = "Allow to use Samba";
var MM_user_settings = "User Settings";
var MM_user_list = "User List";
var MM_disk_settings = "Disk Settings";
var MM_max_volume = "Max Disk Volume";
var MM_volume = "Volume";
var MM_all_users = "All Users";
var MM_printer_srv = "Printer Server";
var MM_printer_srv_settings = "Printer Server Settings";
var MM_multicast_to_unicast = "Multicast-to-Unicast Converter";
var MM_signal = "Signal";
var MM_extch = "Ext Channel";
var MM_proxy = "Proxy";
var MM_java = "Java";
var MM_activeX = "ActiveX";
var MM_clone_mac_settings = "MAC Address Clone Settings";
var MM_clone_mac = "MAC Address Clone";
var MM_notused = "Not used";
var MM_apcli_status = "AP Client Status";
var MM_connect_yes = "Connected";
var MM_connect_no = "Disconnected";
var MM_connect_fail = "Connection fail";
var MM_connect_success = "Connection success";
var MM_upnp_settings = "UPnP Settings";
var MM_isolated_single_ap = "(Same SSID wireless client isolation between)";
var MM_isolated_multiple_ap = "(Wireless client isolation between different SSID, same SSID wireless client isolation)";
var MM_bridge_settings = "Bridge Settings";
var MM_ip_qos_list = "Current Qos List";
var MM_address_type = "Address Type";
var MM_upload_bw = "Uplink Bandwidth";
var MM_download_bw = "Downlink Bandwidth";
var MM_manual_uplink_speed = "Total Uplink Speed";
var MM_manual_downlink_speed = "Total Downlink Speed";
var MM_normal = "Normal";
var MM_hunan_telecom = "Hunan Telecom";
var MM_henan_netcom = "Henan Netcom";
var MM_jiangxi_telecom = "Jiangxi Telecom";
var MM_spec_connection = "Special Connection";
var MM_minimum_bw = "Guaranteed minimum bandwidth";
var MM_maximum_bw = "Restricted maximum bandwidth";
var MM_auto_uplink_speed = "Automatic Uplink Speed";
var MM_auto_downlink_speed = "Automatic Downlink Speed";
var MM_rate = "Rate";
var MM_connect_status = "Connect Status";
var MM_wan_connect_status = "WAN port is not connected to the network cable";
var MM_save_config_file = "Save config file";
var MM_update_config_file = "Update config file";
var MM_load_factory_default = "Load factory default";
var MM_reboot_device_system = "Reboot device sysyem";
var MM_reboot = "Reboot";
//-------------------------------- 
var MM_3gnet_configmode = "Config Mode";
var MM_3gnet_autoconfig = "Auto Detection(recommend)";
var MM_3gnet_manualconfig = "Manual Config";
var MM_3gnet_dialnum = "Dial Num";
var MM_3gnet_username = "User Name";
var MM_3gnet_password = "Password";
var MM_3gnet_pin = "If necessary PIN code";
var MM_3g_detail_info = "3G Detailed Info";
var MM_3g_dialStatus = "Dial Status";
var MM_dialStatus1 = "Dial Success";
var MM_dialStatus2 = "No SIM Card";
var MM_dialStatus3 = "PIN Code Error";
var MM_dialStatus4 = "PIN Code Right";
var MM_dialStatus5 = "Dialing...";
var MM_dialStatus6 = "Dial Fail";
var MM_3g_signal = "Signal";
var MM_3g_isp = "ISP Supplier";
var MM_3g_modemStatus = "Modem Status";
var MM_modemStatus1 = "Detected Modem";
var MM_modemStatus2 = "No Detected Modem";
var MM_3g_SIM = "SIM Card Info";
var MM_NoSim = "No Detected SIM";
var MM_HaveSim = "Detected SIM";
//--------------------------------  
var JS_msg1 = "(The maximum rule count is 10)";
var JS_msg2 = "(The packet that don't match with any rules would be)";
var JS_msg3 = "Comment content only allowed to enter up to 5 Chinese characters.";
var JS_msg4 = "Comment length can not greater than 10 character.";
var JS_msg5 = "Giving up :( Cannot create an XMLHTTP instance";
var JS_msg6 = "There was a problem with the request.";
var JS_msg7 = "Please select a config file!";
var JS_msg8 = "Invalid file format, please try again!";
var JS_msg9 = "You fill in the values or entries already exists.";
var JS_msg10 = "Please specify a firmware file!";
var JS_msg11 = "Do you really want to reset the current settings to default?";
var JS_msg12 = "Please specify a bootloader file!";
var JS_msg13 = "Invalid gateway address!\nIt should be located in the same subnet of current IP address!";
var JS_msg14 = "Password mismatched!";
var JS_msg15 = "Please input 5, 13 (ASCII), 10, or 26 (Hex) characters of WEP Key!";
var JS_msg16 = "";
var JS_msg17 = "WPA key length can not be less than 8 can not be greater than the up to 63!";
var JS_msg18 = "Please select the rule to be deleted!";
var JS_msg19 = "The rule number is exceeded 15!";
var JS_msg20 = "Invalid IP address!\nIt should be located in the same subnet of current IP address!";
var JS_msg21 = "Please input any MAC or/and IP or/and port value!";
var JS_msg22 = "The rule number is exceeded 10!";
var JS_msg23 = "The rule number is exceeded 20!";
var JS_msg24 = "Invalid IP address range!\nEnding address should be greater than or equal to the starting address!"
var JS_msg25 = "The action of this rule would be the same with default policy.";
var JS_msg26 = "Invalid IP address range!\nThe starting address or ending address can not be current IP address!";
var JS_msg27 = "Invalid port range!\nThe 1st port value should be less than 2nd value!";
var JS_msg28 = "Invalid DHCP client start IP address!\nIt should be located in the same subnet of current IP address!";
var JS_msg29 = "Invalid DHCP client end IP address!\nIt should be located in the same subnet of current IP address!";
var JS_msg30 = "Invalid DHCP client address range!\nEnding address should be greater than starting address!";
var JS_msg31 = "Invalid DHCP client address range!\nThe starting address or ending address can not be current IP address!";
var JS_msg32 = "Invalid DHCP gateway address!\nIt should be located in the same subnet of current IP address!";
var JS_msg33 = "No firmware is selected.";
var JS_msg34 = "No any option can be choosed!";
var JS_msg35 = "Please select one option!";
var JS_msg36 = "No Directory.";
var JS_msg37 = "User Accounts have exceeded Maximun!";
var JS_msg38 = "No user can be choosed!";
var JS_msg39 = "Please select one user account!";
var JS_msg40 = "This user has exited!";
var JS_msg41 = "No Partition.";
var JS_msg42 = "Formatting will erase all data on this partition! Are you sure to format it?";
var JS_msg43 = "Are you sure to remove disk?";
var JS_msg44 = "Please wait....";
var JS_msg45 = "Total volume is greater than Max volume.";
var JS_msg46 = "User quota is full!";
var JS_msg47 = "Others would be accepted.";
var JS_msg48 = "No set WAN IP address.";
var JS_msg49 = "Invalid E-mail.";
var JS_msg50 = "Being detected, please wait...";
var JS_msg51 = "(The maximum rule count is 15)";
var JS_msg52 = "Please input WEP Key.";
var JS_msg53 = "Please input 5 or 13 characters of WEP Key.";
var JS_msg54 = "Please input 10 or 26 characters of WEP Key.";
var JS_msg55 = "WDS Encryp Key";
var JS_msg56 = "Are you sure to ignore changed?";
var JS_msg57 = " should be a 10/26 hexdecimal!";
var JS_msg58 = " can not be empty or include the space character!";
var JS_msg59 = "";
var JS_msg60 = "";
var JS_msg61 = "";
var JS_msg62 = "";
var JS_msg63 = ""
var JS_msg64 = "";
var JS_msg65 = "";
var JS_msg66 = "";
var JS_msg67 = "";
var JS_msg68 = "(The maximum rule count is 20)";
var JS_msg69 = "This setting is no security!";
var JS_msg70 = "This setting is going to turn off WPS feature!";
var JS_msg71 = "Pass Phrase length should be larger than 8!";
var JS_msg72 = "Please input 8~63 ASCII or 64 Hexadecimal character!";
var JS_msg73 = "Please choose the 802.1x WEP option!";
var JS_msg74 = "Please choose the Pre-Authentication options!";
var JS_msg75 = "Please input at least 8 character of WAPI PSK pre-Shared Key!";
var JS_msg76 = "Pre-Shared Key of Hex type is a multiple of 2!";
var JS_msg77 = "The mac address is illegal.";
var JS_msg78 = "Please choose a WPA Algorithms!";
var JS_msg79 = "Renew key interval is equal to 0, so the device will not refresh key!";
var JS_msg80 = "Disallow TKIP/WEP encryption is enabled, so 11N rate will turn off!";
var JS_msg81 = " should be a 10/26 hexdecimal or a 5/13 ASCII!";
var JS_msg82 = " should be with length 8~64!";
var JS_msg83 = " should be a 64 hexdecimal!";
var JS_msg84 = "WDS remote AP MAC Address can not be empty!";
var JS_msg85 = "PIN number validation failed!";
var JS_msg86 = "WPS does not support this security mode, please reset to factory default!";
var JS_msg87 = "Do you really want to reboot the device?";
var JS_msg88 = " can not include the space character!";
var JS_msg89 = "Can\'t get the mac address.";
var JS_msg90 = "Uploading firmware.<br><br>Please be patient and don\'t remove usb device if it presented...";
var JS_msg91 = "Cabel check error, please make sure the cabel connect now, then try a again!";
var JS_msg92 = "Connect type is PPPoE!";
var JS_msg93 = "Connect type is DHCP!";
var JS_msg94 = "May be is static IP!";
var JS_msg95 = "Please click \"Automatically detects\" button to check WAN type.";
var JS_msg96 = " must be a valid IP or a valid URL address.";
var JS_msg97 = " must be a Number between 1-300.";
var JS_msg98 = " must be a Number between 100-99999999.";
var JS_msg99 = " must be a Number between 1-99999999.";
var JS_msg100 = " must be a Number between 60-86400.";
var JS_msg101 = " must be a Number between 1-100000.";
var JS_msg102 = " must be a Number between 1-15.";
var JS_msg103 = " must be a Number between 20-999.";
var JS_msg104 = " must be a Number between 1-255.";
var JS_msg105 = " must be a Number between 255-2346.";
var JS_msg106 = " must be a Number between 1-2347.";
var JS_msg107 = " must be a Number between 1-100.";
var JS_msg108 = " must be a valid number.";
var JS_msg109 = " can not contain spaces or special characters.";
var JS_msg110 = " must be an alphabet or a number.";
var JS_msg111 = " must be a valid hexadecimal characters.";
var JS_msg112 = "The Port can not be empty!";
var JS_msg113 = "The Port must be a number(1-65535).";
var JS_msg114 = "The start Port can not be greater than the end of the Port.";
var JS_msg115 = " can not be empty!";
var JS_msg116 = " must be a valid MAC address, and can not be broadcast address and multicast address.";
var JS_msg117 = " must be a valid IP address. e.g. 192.168.100.100";
var JS_msg118 = " must be a valid Subnet Mask address. e.g. 255.255.255.0";
var JS_msg119 = "The start IP address can not greater than the end of the IP address.";
var JS_msg120 = " must be a Number between 1-7200.";
//----------------------------------
var JS_msg_stainfo = "You could display current wireless status and monitor stations which associated to this AP here.";
var JS_msg_lan = "This page is used to configure the parameters for local area network which connects to the LAN port of your Access Point. Here you may change the setting for IP addresss, subnet mask, DHCP, etc..";
var JS_msg_static_dhcp = "This page allows you reserve IP addresses, and assign the same IP address to the network device with the specified MAC address any time it requests an IP address. This is almost the same as when a device has a static IP address except that the device must still request an IP address from the DHCP server.";
var JS_msg_ntp = "You can maintain the system time by synchronizing with a public time server over the Internet.";
var JS_msg_password = "This page is used to set the account to access the web server of Access Point.";
var JS_msg_log = "This page can be used to show the system log.";
var JS_msg_firmware = "Upgrade the firmware to obtain new functionality. <font color=#ff0000>It takes about 1 minute to upload &amp; upgrade flash and be patient please. Caution! A corrupted image will hang up the system.</font>";
var JS_msg_settings = "This page allows you save current settings to a file or reload the settings from the file which was saved previously. Besides, you could reset the current configuration to factory default.";
var JS_msg_statistic = "This page shows the packet counters for transmission and reception regarding to wireless and Ethernet networks.";
var JS_msg_status = "This page shows the current status and some basic settings of the device.";
var JS_msg_sysfirewall = "You may configure the system firewall to protect itself from attacking.";
var JS_msg_ddns = "Dynamic DNS is a service, that provides you with a valid, unchanging, internet domain name (an URL) to go with that (possibly everchanging) IP-address.";
var JS_msg_dmz = "You may set a De-militarized Zone(DMZ) to separate internal network and Internet.";
var JS_msg_urlf = "This page is used to set the URL address to access the web server of Access Point.";
var JS_msg_virtual_server = "You may set Virtual Server to provide services on Internet.";
var JS_msg_portforward = "You may set Port Forwarding to provide services on Internet.";
var JS_msg_ipportf = "You may set firewall rules to protect your network from virus,worm and malicious activity on the Internet.";
var JS_msg_wladvanced = "Use the Advanced Settings page to make detailed settings for the Wireless. Advanced Settings includes items that are not available from the Basic Settings page, such as Beacon Interval, Control Tx Rates and Basic Data Rates.";
var JS_msg_wlbasic = "You could configure the minimum number of Wireless settings for communication, such as SSID and Channel. The Access Point can be set simply with only the minimum setting items.";
var JS_msg_wlsecurity = "Set the wireless security and encryption to prevent from unauthorized access and monitoring.";
var JS_msg_dhcpinfo = "You could show this DHCP clients.";
var JS_msg_routing = "You may add or remote Internet routing rules here.";
var JS_msg_wan = "This page is used to configure the parameters for Internet network which connects to the WAN port of your Access Point. Here you may change the access method to static IP, DHCP, PPPoE, PPTP.";
var JS_msg_wlmssid = "This page shows the wireless setting for multiple APs.";
var JS_msg_wizard = "The easy wizard will guide you to configure access point for first time.";
var JS_msg_wizard_wan = "Configure Internet Network Settings";
var JS_msg_wizard_wireless = "Configure Wireless Settings";
var JS_msg_wlwps = "You could set security easily by choosing PIN or PBC method to do WPS Settings.";
var JS_msg_ftp = "This page is used to set FTP server.";
var JS_msg_samba = "This page is used to set Samba server.";
var JS_msg_user = "This page is used to set User management.";
var JS_msg_disk = "This page is used to set Disk management.";
var JS_msg_printer = "This page is used to set Printer server.";
var JS_msg_sitesurvey = "Site survey page shows information of APs nearby. You may choose one of these APs connecting or adding it to profile.";
var JS_msg_remote = "You may configure the system remote management.";
var JS_msg_upnp = "You may configure the UPnP function.";
var JS_msg_wlmacf = "If you choose 'Allowed Listed', only those clients whose wireless MAC addresses are in the MAC Authentication list will be able to connect to your Access Point. When 'Deny Listed' is selected, these wireless clients on the list will not be able to connect the Access Point.";
var JS_msg_wlopmode = "This page is used to select the bridge mode of Access Point. Default mode is gateway mode.";
var JS_msg_usb = "USB device is not detected, please insert the USB device and then retry.";
var JS_msg_qos = "Entries in this table improve your online gaming experience by ensuring that your game traffic is prioritized over other network traffic, such as FTP or Web.";
//----------------------------------
var MM_ntp1 = "Midway Island, Samoa";
var MM_ntp2 = "Hawaii";
var MM_ntp3 = "Alaska";
var MM_ntp4 = "Pacific Time";
var MM_ntp5 = "Mountain Time, Arizona";
var MM_ntp6 = "Central Time";
var MM_ntp7 = "Middle America";
var MM_ntp8 = "Indiana East, Colombia";
var MM_ntp9 = "Eastern Time";
var MM_ntp10 = "Atlantic Time, Brazil West";
var MM_ntp11 = "Bolivia, Venezuela";
var MM_ntp12 = "Guyana";
var MM_ntp13 = "Brazil East, Greenland";
var MM_ntp14 = "Mid-Atlantic";
var MM_ntp15 = "Azores Islands";
var MM_ntp16 = "Gambia, Liberia, Morocco";
var MM_ntp17 = "England, Ireland, Portugal";
var MM_ntp18 = "Czech Republic, Slovak";
var MM_ntp19 = "Spain, Germany, France";
var MM_ntp20 = "Tunisia";
var MM_ntp21 = "Greece, Ukraine, Turkey";
var MM_ntp22 = "South Africa";
var MM_ntp23 = "Iraq, Jordan, Kuwait";
var MM_ntp24 = "Moscow Winter Time";
var MM_ntp25 = "Armenia";
var MM_ntp26 = "Pakistan, Russia";
var MM_ntp27 = "Bangladesh, Russia";
var MM_ntp28 = "Thailand, Russia";
var MM_ntp29 = "China, Hong Kong, Taiwan";
var MM_ntp30 = "Philippines";
var MM_ntp31 = "Singapore";
var MM_ntp32 = "Australia (WA)";
var MM_ntp33 = "Japan";
var MM_ntp34 = "Korean";
var MM_ntp35 = "Guam, Russia";
var MM_ntp36 = "Australia (QLD,TAS,NSW,ACT,VIC)";
var MM_ntp37 = "Solomon Islands";
var MM_ntp38 = "Fiji";
var MM_ntp39 = "New Zealand";
var MM_minidlna_settings = "Media Server";
var MM_dlna1 = "Directory";
var MM_dlna2 = "Path";
var MM_dlna3 = "Total";
var MM_dlna4 = "Used";
var MM_dlna5 = "Free";
var MM_dlna6 = "Utilization";
var MM_dlna7 = "Partition Status";
var MM_dlna8 = "Designated DLNA server port!";
var MM_dlna9 = "Specify a valid number";
var MM_dlna10 = "Enter a router name!";
var MM_dlna11 = "Specify a valid value(_/a-z/A-Z/0-9)";
var MM_dlna12 = "The maximum number of directory 4";
var MM_dlna13 = "Specify a valid directory!";
var MM_dlna14	= "Rule already exists! ";
var MM_dlna15	= "Rule already exists!";
var MM_dlna16	= "First enable the DLNA server";
var MM_dlna17	= "DLNA Server";
var MM_dlna18	= "Basic setting";
var MM_dlna19	= "DLNA Server";
var MM_dlna20	= "DLNA Server Port";
var MM_dlna21	= "Force Completed";
var MM_dlna22 = "router name";
var MM_dlna23	= "current media directory ";
var MM_dlna24 = "Index";
var MM_dlna25	= "directory";
var MM_dlna26 = "Content type";
var MM_dlna27 = "Add media directory";
var MM_dlna28 = "Content filtering";
var MM_dlna29 = "All media types";
var MM_dlna30	= "Audio only";
var MM_dlna31	= "Vedio only";
var MM_dlna32	= "Image only";
var MM_firmware_update_url = "System update address";
var MM_log_record_upload_url = "Download record upload address";
var MM_firstte_assistant_update_url = "Firstte Assistant update address";
var MM_apk_update_url = "Apk update address";
var MM_time_upload_interval = "Download record upload interval";
