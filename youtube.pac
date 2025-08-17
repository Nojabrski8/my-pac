const dMap = {
    "ytimg.com": true,
    "youtube.com": true,
    "youtu.be": true,
    "googlevideo.com": true,
    "yt3.ggpht.com": true
};
const proxyLine = "SOCKS5 192.168.0.101:1080; DIRECT";
function FindProxyForURL(url, host) {
  if (dMap[host]) return proxyLine;

  var parts = host.split('.');
  while (parts.length > 2) {
    parts.shift();
    if (dMap[parts.join(".")]) return proxyLine;
  }

  return "DIRECT";

}
