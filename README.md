# DualZone Samsung Remote Config

## Public website

- Home: https://metosapps.github.io/dualzone-samsung-config/
- Privacy: https://metosapps.github.io/dualzone-samsung-config/privacy.html
- Terms: https://metosapps.github.io/dualzone-samsung-config/terms.html
- Help: https://metosapps.github.io/dualzone-samsung-config/help.html
- Support: chennoufo11@gmail.com

GitHub Pages publishes `main:/docs` over HTTPS. The site uses the publisher-supplied icon, local CSS, and no analytics scripts or third-party fonts. It does not claim the app is already live. Only public website assets and signed data-only configuration belong in this repository; no private keys or Android source/build artifacts.

## Samsung IAP status

The next prepared binary declares Samsung's billing permission for Seller Portal registration. This is NOT an integrated Samsung purchase flow. Purchases remain disabled and there are no configured paid products or prices. A future purchase-enabled release needs the Samsung SDK, registered products, entitlement validation, restore/acknowledgement handling, device testing and store review. Prices can be configured later. An app does not need to be live to register and test IAP products.

Reference: https://developer.samsung.com/iap/programming-guide/integrate-iap-helper-into-your-app.html

This directory mirrors the data-only configuration published at:

`https://github.com/metosapps/dualzone-samsung-config`

Only `config.json` and its detached ECDSA signature `config.json.sig` are consumed by the reviewed app. Never publish `release/remote-control-signing-private.pem`.

Before publishing a change:

1. Increase `revision`.
2. Keep forced update off until the target Galaxy Store build is publicly downloadable.
3. Give maintenance an expiry no more than seven days away.
4. Run `tools/sign_remote_config.sh` from the project root.
5. Verify both raw GitHub files against the public key pinned in the APK.

The config may change text, links, reviewed feature availability, and operational gates. It must never point to an APK, load code, or bypass store review.
