Title: Sleep
Nr: 2621

async function sleep(millis) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), millis);
  });
}
