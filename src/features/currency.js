import { createStore, createEvent, guard, createEffect } from 'effector'
import { getCurrentExchange } from '../api/getCurrentExchange'
import { resToMap } from '../api/responseToMap'

export const currencyWantToChange = createEvent()
export const currencyUpdated = createEvent()
export const currencyListUpdated = createEvent()
export const send = createEvent()
export const getCurrencysListFx = createEffect(getCurrentExchange)


export const $baseCurrency = createStore('USD')
  .on(currencyUpdated, (_, currency) => {
    localStorage.setItem('currency', currency)
    return currency;
  })

export const $currencyList = createStore({})
  .on(getCurrencysListFx.doneData, (_, result) => {
    return resToMap(result.quotes)
  })

guard({
  source: currencyWantToChange,
  filter: currency => Boolean(currency),
  target: currencyUpdated,
})

guard({
  source: send,
  filter: currency => Boolean(currency),
  target: getCurrencysListFx,
})







