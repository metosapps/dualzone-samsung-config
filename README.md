# DualZone Samsung Remote Config

## Public website

- Home: https://metosapps.github.io/dualzone-samsung-config/
- Privacy: https://metosapps.github.io/dualzone-samsung-config/privacy.html
- Terms: https://metosapps.github.io/dualzone-samsung-config/terms.html
- Help: https://metosapps.github.io/dualzone-samsung-config/help.html
- Support: chennoufo11@gmail.com

GitHub Pages publishes `main:/docs` over HTTPS. The site uses the publisher-supplied icon, local CSS, and no analytics scripts or third-party fonts. It does not claim the app is already live. Only public website assets and signed data-only configuration belong in this repository; no private keys or Android source/build artifacts.

### Landing page

The October 1, 2026 refresh includes the app logo, feature overview, two illustrative promotional previews, local preview-dialog JavaScript, support email, and existing legal pages. All image assets are hosted locally under `docs/assets/`; previews are optimized WebP files.

The Galaxy Store badge links to `https://galaxystore.samsung.com/detail/com.dualzone.app`. The publisher confirmed the listing is not live yet, so the website explicitly says "Coming soon". After confirming public store availability, update the coming-soon wording in `docs/index.html` and `docs/help.html`. Do not change signed app configuration merely to update the website.

The website is buildless: open `docs/index.html` locally to preview, or push website-only changes to `main` to publish through the existing GitHub Pages workflow. Preserve the `privacy.html`, `terms.html`, and `help.html` URLs used by the app.

## Samsung IAP status

On October 2, 2026, the publisher explicitly requested production remote activation. Revision 5 enables ads and billing; DualZone ad-unit configuration version 5 enables all five formats. Analytics, crash reporting, maintenance, forced updates and unfinished features remain unchanged/off. See `ACTIVATION-2026-10-02.md` for scope and rollback.

The prepared signed 1.1.0 (8) candidate integrates Samsung IAP, receipt checks, restore and acknowledgment for four products. The previous binary did not integrate Samsung checkout; a remote flag cannot add that SDK. The publisher reports the four products active in Seller Portal. Physical Samsung purchase/restore and ad delivery remain unverified, and this config activation is not evidence of candidate store approval or production QA completion.

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
