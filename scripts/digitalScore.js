/**************************************
Matching URL:
https://api.rc-backup.com/v1/receipts

MitM Hostname:
api.rc-backup.com
**************************************/

var objc = JSON.parse($response.body);

objc.subscriber.subscriptions["com.symphonicapps.digitalScore.ProUpgrade.1year"].expires_date = "2099-03-08T01:34:21Z";
objc.subscriber.entitlements.pro.expires_date = "2099-03-08T01:34:21Z";

$done({ body: JSON.stringify(objc) });