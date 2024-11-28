/**************************************
Matching URL:
https://api-production.endel.io/v4/call

MitM Hostname:
api-production.endel.io
************************************/

var objc = JSON.parse($response.body);

objc.subscription = {
  "type": "ACTIVE",
  "valid_until": 4085683200,
  "store": "APP_STORE",
  "prev_store": "NOSTORE",
  "trial_type": "CALENDAR_BASED",
  "price_id": "12_Months_Instant_Offer",
  "time_left": 0,
  "cancel_at_period_end": false,
  "period": "YEAR",
  "promo_type": "DEFAULT",
  "trial_canceled": false,
  "store_trial": true,
  "multiple_subscriptions": false,
  "price": 0,
  "currency": "ILS"
};

$done({ body: JSON.stringify(objc) });