export async function getCurrentExchange(base) {
  let response = await fetch(`http://api.currencylayer.com/live?access_key=791dd482f3ddfc2ce5389e9b95958cc1&source=${base}`)
  if (response.ok) {
    let ccyList = await response.json();
    return ccyList;
  } else return false
}