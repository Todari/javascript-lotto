import Lotto from '../../domain/Lotto/Lotto.js';

import { startValidation } from '../startValidation.js';

import { TYPE_OF_NUMBER_REGEXP } from '../../constants/regexp.js';

import { deepFreeze } from '../../utils/object/object.js';

const { LOTTO_RULE } = Lotto;

/**
 * @module BonusNumberValidator
 * @type {import('../../types/jsDoc.js').BonusNumberValidator}
 * 보너스 번호 입력에 대한 유효성 검사를 수행하는 모듈
 */
const BonusNumberValidator = deepFreeze({
  validationTypes: {
    /**
     * @type {import('../../types/jsDoc.js').BonusNumberValidationTypes}
     */
    isTypeOfNumber: {
      errorMessage: '보너스 번호의 형식이 유효하지 않습니다. 다시 입력해 주세요.',
      isValid({ inputValue }) {
        return TYPE_OF_NUMBER_REGEXP.test(inputValue);
      },
    },

    isValidRange: {
      errorMessage: `보너스 번호는 ${LOTTO_RULE.min} ~ ${LOTTO_RULE.max} 사이여야 합니다. 다시 입력해 주세요.`,
      isValid({ inputValue }) {
        const bonusNumber = Number(inputValue);

        return bonusNumber >= LOTTO_RULE.min && bonusNumber <= LOTTO_RULE.max;
      },
    },

    isUniqueBonusNumber: {
      errorMessage: '보너스 번호는 당첨 번호에 포함되지 않은 번호여야 합니다. 다시 입력해 주세요.',
      isValid({ inputValue, winningNumbers }) {
        const bonusNumber = Number(inputValue);

        return !winningNumbers.includes(bonusNumber);
      },
    },
  },

  /**
   * 사용자의 입력 보너스 번호에 대한 유효성 검사 실행
   * @param {string} inputValue - 사용자의 입력 값
   * @param {number[]} winningNumber - 당첨 번호 목록
   * @returns {void}
   */
  check(inputValue, winningNumbers) {
    startValidation(this.validationTypes, { inputValue, winningNumbers });
  },
});

export default BonusNumberValidator;
