# iPhone Push Test

Мини-PWA на GitHub Pages для проверки настоящих Web Push на iPhone (iOS 16.4+). Отдельно от Cocktail Room.

## Настройка

1. GitHub → Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save.
2. URL сайта: https://issataevun-sys.github.io/iphone-push-test/
3. В [OneSignal](https://onesignal.com/) создайте Web Push приложение и настройте сайт на GitHub Pages. Важно: при настройке подпапки `/iphone-push-test/` проверьте требования OneSignal к origin и service worker.
4. Скопируйте публичный **App ID** в `config.js`. **REST API Key** здесь никогда не публикуйте.
5. iPhone: Safari → Поделиться → На экран «Домой» → запустите с иконки → «Разрешить уведомления».
6. Проверьте подписку в OneSignal и отправьте тестовое сообщение через панель OneSignal, затем закройте PWA или заблокируйте экран.

## Apps Script
Файл `AppsScript-SendTest.gs` необязателен: добавьте его как отдельный скрипт в существующий проект. В Project settings → Script properties сохраните `ONESIGNAL_APP_ID`, `ONESIGNAL_REST_API_KEY`, `ONESIGNAL_SUBSCRIPTION_ID`. Запустите `sendTestIPhonePush`.

GitHub Pages — только статический хостинг. Для реальной доставки используется OneSignal. Отправка запроса не гарантирует получение push: проверяйте на iPhone.
