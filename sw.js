// 설치용 최소 서비스 워커: 저장(캐시)하지 않고 항상 최신 화면을 불러옵니다.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
