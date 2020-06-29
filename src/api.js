const URL = 'https://api.coincap.io/v2';

async function getAssets() {
  try {
    const res = await fetch(`${URL}/assets?limit=20`);
    const resjson = await res.json();
    return resjson.data;
  } catch (error) {
    return error;
  }
}

async function getAsset(coin) {
  try {
    const res = await fetch(`${URL}/assets/${coin}`);
    const resjson = await res.json();
    return resjson.data;
  } catch (error) {
    return error;
  }
}

async function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  try {
    const res = await fetch(
      `${URL}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    );
    const resjson = await res.json();
    return resjson.data;
  } catch (error) {
    return error;
  }
}

async function getMarkets(coin) {
  try {
    const res = await fetch(`${URL}/assets/${coin}/markets?limit=5`);
    const resjson = await res.json();
    return resjson.data;
  } catch (error) {
    return error;
  }
}

async function getExchange(id) {
  try {
    const res = await fetch(`${URL}/exchanges/${id}`);
    const resjson = await res.json();
    return resjson.data;
  } catch (error) {
    return error;
  }
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
