/**************************************
Matching URL:
https://purchase-epik-api.snow.me/v1/purchase/subscription/subscriber/status

MitM Hostname:
purchase-epik-api.snow.me
************************************/

var objc = JSON.parse($response.body);

objc.result.activated = true;

$done({ body: JSON.stringify(objc) });
