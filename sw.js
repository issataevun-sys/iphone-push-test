self.addEventListener('install',event=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('push',event=>{
  let data={};
  try{if(event.data)data=event.data.json()}catch(e){data={body:event.data?event.data.text():''}}
  event.waitUntil(self.registration.showNotification(data.title||'iPhone Push Test',{
    body:data.body||'Настоящее push-уведомление получено!',
    tag:'iphone-push-test',
    data:{url:'./'}
  }));
});
self.addEventListener('notificationclick',event=>{
  event.notification.close();
  event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(async all=>{
    for(const c of all)if(c.url.includes('/iphone-push-test/'))return c.focus();
    return clients.openWindow('./');
  }));
});
