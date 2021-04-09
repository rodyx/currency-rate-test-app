export const stringToCcy = (str) => {
  let arr = str.split(/in|to|в|на/)
  if (arr.length !== 2) return false;

  return [
    arr[0].toUpperCase().match(/[A-Z]{3}/g),
    arr[1].toUpperCase().match(/[A-Z]{3}/g),
    arr[0].match(/\d+(\.\d+)*/g)
  ]
}

export async function convertCurrency(str) {
  const [from, to, amount] = stringToCcy(str)
  let response = await fetch(`https://api.currencylayer.com/convert?access_key=791dd482f3ddfc2ce5389e9b95958cc1&from=${from}&to=${to}&amount=${amount}`)
  if (response.ok) {
    let resultObj = await response.json();
    return resultObj;
  } else return false
}