const webpush=require('web-push');
const privateKey=process.env.VAPID_PRIVATE_KEY;
const subscriptionText=process.env.PUSH_SUBSCRIPTION;
if(!privateKey||!subscriptionText)throw new Error('Missing GitHub Actions secrets: VAPID_PRIVATE_KEY and PUSH_SUBSCRIPTION');
let subscription;
try{subscription=JSON.parse(subscriptionText)}catch(e){throw Error('PUSH_SUBSCRIPTION must contain complete JSON from PWA')}
if(!subscription.endpoint||!subscription.keys?.p256dh||!subscription.keys?.auth)throw Error('Invalid push subscription JSON');
webpush.setVapidDetails('mailto:push-test@example.com',"BBzUNfgnhNDi_EPPcjSmfIFes1aPc9c6pmGfdDvFKknBtObYpHX6JqXHVxabXy4XVjPiTllsNTK32xD1waHcs9c",privateKey);
webpush.sendNotification(subscription,JSON.stringify({title:'🔔 Тестовый PUSH',body:'Ура! Push пришёл с GitHub Actions, без OneSignal.'}),{TTL:120}).then(r=>console.log('Push service accepted request, HTTP '+r.statusCode+' (delivery to device not guaranteed)')).catch(e=>{console.error('Push failed:',e.statusCode||'',e.body||e.message);process.exitCode=1});
