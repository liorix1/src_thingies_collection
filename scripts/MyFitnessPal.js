/**************************************
Matching URL:
https://premium-api.myfitnesspal.com/v3/subscriptions/MFPsubscriber/status

MitM Hostname:
premium-api.myfitnesspal.com
**************************************/

var objc = JSON.parse($response.body);

objc.productId = "mfp_12m_ios_7999";
objc.hasPremium = true;
objc.subscriptionStartDate = "2024-09-13T10:12:41.675Z";
objc.subscriptionEndDate = "2099-01-01T05:00:00.000Z";

$done({ body: JSON.stringify(objc) });