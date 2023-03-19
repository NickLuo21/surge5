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

// const filterRegex = /套餐|感谢|剩余/;

function filter(proxies, targetPlatform) {
  return proxies.map( proxy => {
    // Return true if the current proxy is selected
    if (proxy.name.includes('套餐')) {
      return false;
    }
    return true;
  });
}
