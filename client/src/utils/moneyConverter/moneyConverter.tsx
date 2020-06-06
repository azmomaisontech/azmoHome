type MoneyConverterProps = (curreny: string, money: number) => any;

const moneyConverter: MoneyConverterProps = (currency, money) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency
  });

  return formatter.format(money);
};

export default moneyConverter;
