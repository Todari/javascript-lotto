class RateOfReturnCalculator {
  static WINNING_PRIZE_DETAIL = {
    '1st': 2_000_000_000,
    '2nd': 30_000_000,
    '3rd': 1_500_000,
    '4th': 50_000,
    '5th': 5_000,
  };

  #buyLottoPrice;

  #winningRankDetail;

  constructor({ buyLottoPrice, winningRankDetail }) {
    this.#buyLottoPrice = buyLottoPrice;
    this.#winningRankDetail = winningRankDetail;
  }

  #calculateTotalWinningAmount() {
    const totalWinningAmount = Object.keys(this.#winningRankDetail).reduce((total, rank) => {
      const count = this.#winningRankDetail[rank];
      const prize = RateOfReturnCalculator.WINNING_PRIZE_DETAIL[rank];

      return total + count * prize;
    }, 0);

    return totalWinningAmount;
  }

  #formatDecimal(totalWinningAmount) {
    return ((totalWinningAmount / this.#buyLottoPrice) * 100).toFixed(1);
  }

  execute() {
    const totalWinningAmount = this.#calculateTotalWinningAmount();

    return this.#formatDecimal(totalWinningAmount);
  }
}

export default RateOfReturnCalculator;
