/**************************************
Matching URL:
https://api.alohaprofile.com/v1/profile_info

MitM Hostname:
api.alohaprofile.com
************************************/

var objc = JSON.parse($response.body);
objc.profile.is_premium = true;
$done({ body: JSON.stringify(objc) });
