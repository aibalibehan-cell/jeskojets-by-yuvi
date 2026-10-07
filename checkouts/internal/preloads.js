
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CJXaw4wt.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.DmiscuBW.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.DHgv0Fpe.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser-legacy.CeZCpR-9.js","/cdn/shopifycloud/checkout-web/assets/c1/grouping-legacy.t5Iir6lh.js","/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge-legacy.DczZjYRA.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors-legacy.D8cUZeeh.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-buyer-consent-legacy.ButS0ObS.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-shop-theme-legacy.EJiazIVK.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-updaters-helpers-legacy.BmPNHb_t.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery-legacy.Bp6bt0vp.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers-legacy.DMpk_Xgc.js","/cdn/shopifycloud/checkout-web/assets/c1/error-logger-report-graphql-error-legacy.Cpyxub-1.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails-legacy.feFjf8R-.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shopCashMoney-legacy.DluL9iZX.js","/cdn/shopifycloud/checkout-web/assets/c1/mappers-checkout-policy-legacy.4huo1Ajf.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-installments-monorail-legacy.COmJbuRZ.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate-legacy.BPi2Mc_5.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser-legacy.C99aovMV.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.BCWES1fW.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage-legacy.CMLq5SRe.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition-legacy.J2g3CQp6.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.B6DTZO-f.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.CJgp4c3Y.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation-legacy.B-LbfD0-.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.JLNwnNUG.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm-legacy.CEzTBmhx.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField-legacy.D23Vczlo.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.M2rL88Rh.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-compact-legacy.D8z-ajyC.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover-legacy.B6ZVioP5.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice-legacy.BkelSs5U.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad-legacy.Ds7zVo05.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.Bv6Q7fl-.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture-legacy.D0kWycTs.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useEcpSpiDebugLog-legacy.CHYY2L4Q.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo-legacy.Ds2p38d6.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.DNVdsZUZ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase-legacy.XNwRuUZ7.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack-legacy.DZWz6ywb.js","/cdn/shopifycloud/checkout-web/assets/c1/IncentiveBadge-legacy.BtgqynF6.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride-legacy.DLaY1wsN.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage-legacy.BlGqwt1A.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.B-IuLAhd.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping-legacy.BKFluA6A.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch-legacy.BBjUYFCf.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressMutationsWithNegotiation-legacy.D5htJetw.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon-legacy.BXToea6n.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine-legacy.D2BQUr_p.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-ThemeOverride-legacy.BcLgS-zR.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.CdjG6aJA.js","/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason-legacy.BFRIgtTq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts-legacy.Dsdugu4J.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.C3V7QOdd.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-findSelectedDeliveryMethod-legacy.Cp2tWzpK.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.BfzVk45K.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.DNgEI-SF.js","/cdn/shopifycloud/checkout-web/assets/c1/StickyPayButton-StickyPayButton.module-legacy.pp2-FJrU.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button-legacy.DVeWXjN-.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi-legacy.LTRzHHyX.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscounts-legacy.BcjL7JnR.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot-legacy.CIjv-vvn.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent-legacy.pLfDSTRq.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel-legacy.DYJyg1rC.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included-legacy.pdzQsmTf.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines-legacy.DiuWIbcf.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.BVSfRtEB.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.C4njIAs5.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.D2Jp_Y5d.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea-legacy.BDHUYMeF.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.D3B5bqKT.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.B8SNqOHR.js","/cdn/shopifycloud/checkout-web/assets/c1/page-BelowTheFoldContent-legacy.Baq-qs3o.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha-legacy.BTzrJPFX.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayCaptcha-legacy.BnoHUXo5.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeSection-legacy.DO6GjKv7.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentMethods-legacy.BglZyHDf.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.B8zFhejZ.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage-legacy.CjRPmscX.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.DIZJSL9o.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.CKhWNyqp.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler-legacy.BX2kHAo3.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentOptionSelector-legacy.CMUDuflY.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector-legacy.C8aexLw9.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences-legacy.DGZ4tRMe.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0936/7765/0210/files/Checkout_x320.png?v=1746626358"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  