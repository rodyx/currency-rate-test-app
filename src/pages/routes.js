import { Converter } from "./Converter/Converter"
import { CurrencyRate } from "./CurrencyRate/CurrencyRate"

export const routes = [
  {
    title: 'Конвертер',
    component: Converter,
    path: '/',
    exact: true
  },
  {
    title: 'Курс валют',
    component: CurrencyRate,
    path: '/currency-rate',
  }
]