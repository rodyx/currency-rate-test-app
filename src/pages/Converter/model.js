import { createEffect, createStore, createEvent, guard } from 'effector'
import { convertCurrency } from '../../api/getConvertAmount'

export const convertCurrencyFx = createEffect(convertCurrency)
export const sendInputValue = createEvent()

export const $convertResult = createStore(null)
  .on(convertCurrencyFx.doneData, (_, responseObj) => responseObj.result || responseObj.error.info)
  .on(convertCurrencyFx.failData, (_, error) => error.toString() || "Error")
export const $convertRate = createStore(null)
  .on(convertCurrencyFx.doneData, (_, responseObj) => responseObj.info?.quote || "Error")
  .on(convertCurrencyFx.fail, () => "Error")

guard({
  source: sendInputValue,
  filter: value => Boolean(value),
  target: convertCurrencyFx
})


  