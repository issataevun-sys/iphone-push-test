# iPhone Push Test — без OneSignal

GitHub Pages hosts the PWA, GitHub Actions sends standard encrypted Web Push using VAPID.

## Setup

1. Enable GitHub Pages for main / root.
2. Open https://issataevun-sys.github.io/iphone-push-test/ on iPhone Safari; Add to Home Screen; launch from icon.
3. Press **Разрешить и подписаться**, then **Скопировать подписку**.
4. GitHub repository → Settings → Secrets and variables → Actions → New repository secret:
   - Name **VAPID_PRIVATE_KEY** — the private key provided separately. Never commit this key.
   - Name **PUSH_SUBSCRIPTION** — paste full JSON copied from installed PWA. Do not commit this JSON.
5. GitHub Actions → **Send test push** → Run workflow.
6. Lock iPhone; verify notification arrives. A successful HTTP response means push provider accepted the request; check the actual device too.

No additional server, provider account, or Apple Developer membership is required. GitHub Actions has usage limits.

Note: This test is a manual one-device flow. For many devices or automatic events a secure endpoint/subscription storage solution is needed.
