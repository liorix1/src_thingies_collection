/**************************************
Matching URL:
https:\/\/app\.mobile\.me\.app\/.*

MitM Hostname:
app.mobile.me.app
**************************************/

var objc = JSON.parse($response.body);

if ($request.url === "https://app.mobile.me.app/main/settings/validate-purchase/") {
  // Set specific values for the validate-purchase URL
  objc.start_date = "2024-12-01T11:44:32Z";
  objc.end_date = "2099-12-01T11:44:32Z";
  objc.is_premium = true;

  // Ensure recursive handling in case of nested is_premium keys
  function setPremiumTrue(obj) {
    for (let key in obj) {
      if (key === "is_premium") {
        obj[key] = true;
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        setPremiumTrue(obj[key]); // Recursively check nested objects
      }
    }
  }

  setPremiumTrue(objc);
} else {
  // General case for other URLs: only set is_premium to true wherever found
  function setPremiumTrue(obj) {
    for (let key in obj) {
      if (key === "is_premium") {
        obj[key] = true;
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        setPremiumTrue(obj[key]); // Recursively check nested objects
      }
    }
  }

  setPremiumTrue(objc);
}

$done({ body: JSON.stringify(objc) });
