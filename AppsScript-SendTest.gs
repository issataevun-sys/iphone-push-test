// Не заменяйте существующий Code.gs. Добавьте отдельным файлом при необходимости.
function sendTestIPhonePush() {
  const props = PropertiesService.getScriptProperties();
  const appId = props.getProperty('ONESIGNAL_APP_ID');
  const apiKey = props.getProperty('ONESIGNAL_REST_API_KEY');
  const subscriptionId = props.getProperty('ONESIGNAL_SUBSCRIPTION_ID');
  if (!appId || !apiKey || !subscriptionId) throw new Error('Заполните ONESIGNAL_APP_ID, ONESIGNAL_REST_API_KEY, ONESIGNAL_SUBSCRIPTION_ID в Script Properties');
  const response = UrlFetchApp.fetch('https://api.onesignal.com/notifications', {
    method: 'post', contentType: 'application/json',
    headers: {Authorization: 'Key ' + apiKey},
    payload: JSON.stringify({
      app_id: appId,
      target_channel: 'push',
      include_subscription_ids: [subscriptionId],
      headings: {en: 'iPhone Push Test'},
      contents: {en: 'Настоящий push с Google Apps Script 🔔'}
    }),
    muteHttpExceptions: true
  });
  Logger.log(response.getResponseCode()+' '+response.getContentText());
}
