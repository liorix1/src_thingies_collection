/**************************************
Matching URL:
^https?:\/\/.*\.apphud\.com\/v\d\/(subscriptions|customers)$

MitM Hostname:
*.apphud.com
**************************************/

const chxm1023 = JSON.parse(typeof $response != "undefined" && $response.body || "{}");

const list = [
  "com.newlearning.english.premium.forever",  //Excellent
  "1year7days80",  //Bright
  "com.movavi.clips.lifetime",  //Movavi
  "ok.annual.sub",  //BodyOK
  "AFMS",  //WatchFace表盘商店
  "com.tm.replica.lifetime",  //Replica
  "Plant_1w_7.99_3d",  //PlantMe
  "one.time.premium",
  "com.maxmedvedev.wallpaperapp.subscription.all_features.yearly.7d.first",
  "com.sleepycoach.sleepy.premium.yearly",
  "com.haptichq.annual"
];

const createSubscription = (productId = "one.time.premium", groupid = "1a2b3c4d") => {
  return {
    "status": "trial",
    "group_id": groupid,
    "autorenew_enabled": false,
    "introductory_activated": true,
    "cancelled_at": null,
    "kind": "autorenewable",
    "id": "a1234567-b123-c123-d123-e12345678910",
    "next_check_at": "2099-09-09T09:09:09.000Z",
    "product_id": productId,
    "platform": "ios",
    "environment": "production",
    "local": false,
    "retries_count": 0,
    "units_count": 7,
    "unit": "day",
    "in_retry_billing": false,
    "started_at": "2024-11-11T11:11:11.000Z",
    "original_transaction_id": "490001314520000",
    "expires_at": "2099-09-09T09:09:09.000Z",
    "is_consumable": null
  };
};

const processPaywalls = (paywalls) => {
  const subscriptions = [];
  if (!Array.isArray(paywalls)) return subscriptions;
  for (const paywall of paywalls) {
    if (paywall.items) {
      for (const item of paywall.items) {
        const productId = item.product_id || "one.time.premium";
        const groupid = item.id || "1a2b3c4d";
        subscriptions.push(createSubscription(productId, groupid));
      }
    }
  }
  return subscriptions;
};

if (!chxm1023.data) chxm1023.data = {};
if (!chxm1023.data.results) chxm1023.data.results = {};

chxm1023.data.results.subscriptions = [];

if (chxm1023.data.results.paywalls) {
  const subscriptions = processPaywalls(chxm1023.data.results.paywalls);
  for (const sub of subscriptions) {
    chxm1023.data.results.subscriptions.push(sub);
  }
}

for (const productId of list) {
  chxm1023.data.results.subscriptions.push(createSubscription(productId));
}

$done({ body: JSON.stringify(chxm1023) });