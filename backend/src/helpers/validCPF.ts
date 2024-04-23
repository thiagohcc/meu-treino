const cpfIsValid = (_cpf: string) => {

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(_cpf[i]) * (10 - i);
  }

  let resto = sum % 11;
  let digit1 = resto < 2 ? 0 : 11 - resto;

  sum = 0;
  for(let i = 0; i < 10; i++) {
    sum += parseInt(_cpf.charAt(i)) * (11 - i);
  }
  let resto2 = sum % 11;
  let digit2 = resto2 < 2 ? 0 : 11 - resto2;

  if (parseInt(_cpf.charAt(9)) !== digit1 || parseInt(_cpf.charAt(10)) !== digit2) {
    return true;
  };

  return false;
};


export default cpfIsValid;