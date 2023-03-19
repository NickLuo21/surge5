// 获取机场名
const airport = ($arguments.airport == undefined) ? '' : decodeURI($arguments.airport);

function operator(proxies, targetPlatform) {
  return proxies.map( proxy => {
    // change proxy information here
    const resultArray = [airport];
    resultArray.push(proxy.name);
    proxy.name = resultArray.join(' ');
    return proxy;
  });
}

function filter(proxies, targetPlatform) {
  return proxies.map( proxy => {
    // Return true if the current proxy is selected
    return true;
  });
}
