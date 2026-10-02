# Publisher-Requested Monetization Activation

The publisher requested enabling monetization on October 2, 2026, accepting that device feedback would follow release. This change enables data-only flags; it does not upload, approve or publish a new APK.

## Scope

- Signed control revision 5: `ads_enabled=true`, `billing_enabled=true`.
- `metosapps/ads-config/dualzone_ads_config.json` version 5: global ads and banner, interstitial, rewarded, app-open and native enabled, preserving the five DualZone production IDs.
- All other control values unchanged. No maintenance, forced update, analytics, crash reporting or unsupported feature activation.
- Consent, paid-user suppression, first-day suppression and frequency/lifecycle limits in the 1.1.0 implementation remain in force. Remote flags do not override native guards or add code to older builds.
- Config is shared with existing compatible installations, not a version-targeted rollout. Fetch/cache timing means propagation is not instantaneous.

## Remaining Risks

The 1.1.0 (8) candidate has not completed physical Samsung checkout/restore or five-format advertising QA. Galaxy Store Data Safety has not been updated in this task. The scope of the user-supplied AdMob Policy Issues notice, ad readiness and UMP message publication remain unverified. Enabling these flags does not resolve those gaps or certify store compliance. A binary with new SDKs still needs normal store review.

The prior release report records an OFF snapshot before this later instruction. The APK itself is unchanged by this activation. No chargeable purchase, production-ad click or store submission was performed.

## Rollback

1. Set control `ads_enabled` and `billing_enabled` to false with a revision greater than 5, sign with the existing private key outside this repository, verify against the app's pinned public key, and publish JSON plus signature together.
2. Set global ads and all formats false in the DualZone ad-unit config with a version greater than 5 and publish. Preserve other apps' configurations.
3. Verify both raw endpoints. Do not reuse an older revision; cached clients may reject it. Existing purchases must remain restorable when new purchases are paused.

No private signing material belongs in this public repository.
