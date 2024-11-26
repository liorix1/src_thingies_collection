/**************************************
Matching URL:
https://premium-noneu.truecaller.com/v3/subscriptions/status

MitM Hostname:
premium-noneu.truecaller.com
************************************/

var objc = JSON.parse($response.body);

objc.expire = "2099-11-13T13:26:38Z";
objc.start = "2024-11-06T13:26:38Z";
objc.paymentProvider = "Apple";
objc.isExpired = false;
objc.isGracePeriodExpired = false;
objc.subscriptionStatus = "SUBSCRIBED";
objc.inAppPurchaseAllowed = true;
objc.product = {
    id: "apple_gold_yearly_v0",
    sku: "apple_gold_yearly_v0",
    contentType: "subscription",
    productType: "SubsYearly",
    isFreeTrial: true
};
objc.tier = {
    id: "gold",
    feature: [
        { id: "gold_feature", rank: -2147483648, status: "Included", isFree: false },
        { id: "spam_blocking", rank: -2147483648, status: "Included", isFree: true },
        { id: "caller_id", rank: -2147483648, status: "Included", isFree: true },
        { id: "no_ads", rank: 1, status: "Included", isFree: false },
        { id: "extended_spam_blocking", rank: 2, status: "Included", isFree: false },
        { id: "advanced_caller_id", rank: 3, status: "Included", isFree: false },
        { id: "live_lookup", rank: 4, status: "Included", isFree: false },
        { id: "verified_badge", rank: 5, status: "Included", isFree: false },
        { id: "spam_stats", rank: 6, status: "Included", isFree: false },
        { id: "auto_spam_block", rank: 7, status: "Included", isFree: false },
        { id: "call_alert", rank: 8, status: "Included", isFree: false },
        { id: "ct_call_recording", rank: 10, status: "Included", isFree: false },
        { id: "call_assistant", rank: 11, status: "Included", isFree: false },
        { id: "assistant_custom_greeting", rank: 12, status: "Included", isFree: false },
        { id: "assistant_voicemail", rank: 13, status: "Included", isFree: false },
        { id: "identifai", rank: 14, status: "Included", isFree: false },
        { id: "siri_search", rank: 15, status: "Included", isFree: false },
        { id: "who_viewed_my_profile", rank: 16, status: "Included", isFree: false },
        { id: "incognito_mode", rank: 19, status: "Included", isFree: false },
        { id: "premium_badge", rank: 20, status: "Included", isFree: false },
        { id: "premium_app_icon", rank: 21, status: "Included", isFree: false },
        { id: "live_chat_support", rank: 23, status: "Included", isFree: false },
        { id: "gold_caller_id", rank: 26, status: "Included", isFree: false }
    ]
};
objc.scope = "paid_gold";

$done({ body: JSON.stringify(objc) });
