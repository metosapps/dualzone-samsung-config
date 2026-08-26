# DualZone Samsung Remote Config

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
