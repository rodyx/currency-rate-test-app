function stringToCcy(str) {
  let arr = str.split(/in|to|в|на/)
  if (arr.length !== 2) return false;

  return [
    `${arr[0].toUpperCase().match(/[A-Z]{3}/g)}`,
    `${arr[1].toUpperCase().match(/[A-Z]{3}/g)}`,
    `${arr[0].match(/\d+(\.\d+)*/g)}`
  ]
}

export async function convertCurrency(str) {
  const resArr = stringToCcy(str)
  if (!resArr) {
    throw new Error('You have provided an invalid request')
  } 

  const [from, to, amount] = resArr
  if (!+amount) {
    throw new Error('You have not specified an amount to be converted.')
  }
  
  let response = await fetch(`https://api.currencylayer.com/convert?access_key=791dd482f3ddfc2ce5389e9b95958cc1&from=${from}&to=${to}&amount=${amount}`)
  if (response.ok) {
    let resultObj = await response.json();
    return resultObj;
  } else return false
}