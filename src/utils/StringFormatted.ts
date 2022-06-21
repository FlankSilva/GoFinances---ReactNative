export const formatedCurrency = (currency: number | string) => {

  const newCurrency = Number(currency)

  return `R$ ${newCurrency.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
}