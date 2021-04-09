import { createEffect, createStore, createEvent, forward } from 'effector'
import { convertCurrency } from '../../api/getConvertAmount'

export const convertCurrencyFx = createEffect(convertCurrency)
export const sendInputValue = createEvent()

export const $convertResult = createStore(null)
  .on(convertCurrencyFx.doneData, (_, responseObj) => responseObj.result)
export const $convertRate = createStore(null)
  .on(convertCurrencyFx.doneData, (_, responseObj) => responseObj.info.quote)

forward({
  from: sendInputValue,
  to: convertCurrencyFx
})

