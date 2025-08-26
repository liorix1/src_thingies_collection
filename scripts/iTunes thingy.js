/**************************************
Matching URL:
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt

MitM Hostname:
buy.itunes.apple.com
**************************************/


var receiptData = JSON.parse($response.body);

// ********** Product ID Map ********** //
var productMapping = {
  'default': ['receiptData', 'productID', 0],
  'com.PhotonPoet.FioCam': ['FioCam', 'com.PhotonPoet.FioCam', 0],
  'com.betterweightapp.BetterWeight': ['Better Weight', 'com.betterweightapp.one_month_plus', 0],
  'com.anytvapp.app': ['AnyTV', 'annuly_without_trial', 0],
  'com.fourtome.app': ['Fourtome', 'com.fourtome.app.year', 0],
  'com.hahainteractive.GoodTask3': ['GoodTask', 'com.hahainteractive.goodtask3.pro', 1],
  'com.funnmedia.hit-the-island': ['Hit The Island', 'HTI_NO_ADS', 1],
  'com.sugarmo.ScrollClip': ['picsewV3.9.4', 'com.sugarmo.ScrollClip.pro', 1],
  'com.zijayrate.analogcam': ['oldroll', 'com.zijayrate.analogcam.vipforever10', 0],
  'com.loveyouchenapps.knockout': ['proknockout', 'com.knockout.7daysplus', 0],
  'net.shinyfrog.bear-iOS': ['bear', 'net.shinyfrog.bear_iOS.pro_yearly_subscription_bis', 0],
  'com.yengshine.proccd': ['proccd', 'com.yengshine.proccd.year', 0],
  'com.yumiteam.Kuki.ID': ['PicsLeap', 'com.yumiteam.Kuki.ID.4', 1],
  'com.calc.iphone': ['Calculator', 'calc_Unlock_1', 0],
  'me.imgbase.intolive': ['intolive', 'me.imgbase.intolive.proSubYearly', 0],
  'MVH6DNU2ZP.input': ['logcg', 'com.logcg.loginput', 1],
  'com.waterminder.waterminder': ['waterminder', 'waterminder.premiumYearly', 0],
  'wtf.riedel.one-sec': ['onesec', 'wtf.riedel.one_sec.pro.annual.individual', 0],
  'com.aaaalab.nepacket': ['http', 'com.li.blur.pro.month', 0],
  'com.inturnex.Sticker-Maker': ['Sticker', 'com.inturnex.Sticker_Maker.full_access', 1],
  'FuYuan.inkDiary': ['Secai', 'FuYuan.inkDiary.YearB.Pro', 0],
  'me.imgbase.imgplay': ['imgplay', 'me.imgbase.imgplay.subscriptionYearly', 0],
  'com.mediaeditor.video': ['PrettyUp', 'yearautorenew', 0],
  'com.anycasesolutions.SexTracker': ['SexTracker', 'com.anycasesolutions.SexTracker.3mon', 0],
  'com.jianili.pawff': ['pawff', 'com.jianili.pawff.pro.monthly', 0],
  'icar.ren.smk': ['smk', 'smoke19870727', 0],
  'com.meditation.heartratehrv': ['meditation', 'lifetimeusa', 1],
  'livintis.com.wallpapermonster': ['wallpaper', 'wallpaperworld.subscription.yearly.12.notrial', 0],
  'com.tianlang.gifmaker': ['gifmaker', 'com.tianlang.gifmaker.forever', 1],
  'me.imgbase.videoday': ['videoday', 'me.imgbase.videoday.profeaturesYearly', 0],
  'com.icandiapps.nightsky': ['nightsky', 'com.icandiapps.ns4.annual', 0],
  'com.lixkit.diary': ['diary', 'com.lixkit.diary.permanent_68', 0],
  'com.touchbits.subscriptions': ['dyt', 'com.touchbits.subscriptions.iap.pro.yearly', 0],
  'dev.sanjin.WasteCat': ['cat', 'dev.sanjin.WasteCat.PermanentVip', 1],
  'com.zerone.hidesktop': ['iscreen', 'com.zerone.hidesktop.forever', 0],
  'co.bazaart.app': ['bazaart', 'Bazaart_Premium_Monthly_v9', 0],
  'com.pollykann.app': ['pollykann', 'vip.forever.pollykann', 1],
  'com.vitalii.mind': ['mind', 'com.vitalii.mind.lifetime2', 1],
  'com.vitalii.water': ['water', 'com.vitalii.water.sub.premium19', 0],
  'com.movenext.zen': ['zen', 'com.movenext.zen.freetrialYearly30days', 0],
  'pl.holko.ReadFaster': ['readfaster', 'pl.holko.ReadFaster.subscriptions.plus.individual.yearly', 0],
  'myndarc.newFitnessApp': ['fitnessApp', 'newfitnessapp02', 0],
  'com.fourtome.app': ['fourtome', 'com.fourtome.app.year', 0],
  'com.byteapp.tubepod': ['tubepod', 'com.byteapp.tubepod.year', 0],
  'com.muscleandmotion.Posture': ['Posture', 'com.musclemotion.posturenative.fullaccess.monthly', 0]
};

// ********** Static Fields ********** //
receiptData.Attention = "Metadata captured successfully! For personal use only.";
var mapId = receiptData.receipt.bundle_id,
  mapping = productMapping[mapId] || productMapping.default,
  inAppPurchaseDetails = {
    product_id: mapping[1],
    quantity: "1",
    expires_date: "2099-12-18 23:59:59 Etc/GMT",
    expires_date_pst: "2099-12-18 23:59:59 America/Los_Angeles",
    expires_date_ms: "4101292799000",
    is_in_intro_offer_period: "false",
    transaction_id: "100000000000000",
    is_trial_period: "false",
    original_transaction_id: "100000000000000",
    purchase_date_ms: "1701705599000",
    purchase_date: "2023-12-04 23:59:59 Etc/GMT",
    purchase_date_pst: "2023-12-04 23:59:59 America/Los_Angeles",
    original_purchase_date: "2023-12-04 23:59:59 Etc/GMT",
    original_purchase_date_pst: "2023-12-04 23:59:59 America/Los_Angeles",
    original_purchase_date_ms: "1701705599000",
    in_app_ownership_type: "PURCHASED",
    web_order_line_item_id: "100000000000000"
  },
  renew = {
    product_id: mapping[1],
    original_transaction_id: "100000000000000",
    auto_renew_product_id: mapping[1],
    auto_renew_status: "1"
  };

mapping[2]
  ? (delete inAppPurchaseDetails.expires_date,
     delete inAppPurchaseDetails.expires_date_ms,
     delete inAppPurchaseDetails.expires_date_pst)
  : (receiptData.latest_receipt_info = [inAppPurchaseDetails],
     receiptData.latest_receipt = "product_receipt_url",
     receiptData.pending_renewal_info = [renew]);

receiptData.receipt.in_app = [inAppPurchaseDetails];

console.log('Operation Successful!');
$done({ body: JSON.stringify(receiptData) });
