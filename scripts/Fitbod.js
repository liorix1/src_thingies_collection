/**************************************
*My user id?

Matching URL:
https://billing.fitbod.me/v2/subscriptions

MitM Hostname:
billing.fitbod.me
************************************/


var objc = JSON.parse($response.body);
objc.data.subscriptions = [
  {
    id: 3869922,
    user_id: "7c89821e-8ff9-4dde-89f0-1bb3c18c8d38",
    source: "trial",
    is_subscribed: true,
    subscribed_at: 1731016264068,
    subscribed_at_date: "2024-11-07T21:51:04.068695Z",
    expiration_at: 4102444800000, // Unix timestamp for 2099-01-01T00:00:00Z
    expiration_at_date: "2099-01-01T00:00:00Z",
    renewable: false,
    product: "no_cc_trial",
    prepaid_code_id: 0,
    canceled_at: ""
  },
  {
    id: 3869982,
    user_id: "7c89821e-8ff9-4dde-89f0-1bb3c18c8d38",
    source: "apple",
    is_subscribed: true,
    subscribed_at: 1731015264000,
    subscribed_at_date: "2024-11-07T21:34:24Z",
    expiration_at: 4102444800000, // Unix timestamp for 2099-01-01T00:00:00Z
    expiration_at_date: "2099-01-01T00:00:00Z",
    renewable: false,
    product: "com.fitbod.subscription.free.trial.yearly.79.99",
    prepaid_code_id: 0,
    canceled_at: ""
  }
];
$done({ body: JSON.stringify(objc) });
