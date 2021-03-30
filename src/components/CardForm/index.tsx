import { useState } from 'react';
import { Container } from './styles';

import FlechaIcon from '../../assets/arrow.svg';
import ErrorIcon from '../../assets/error.svg';
import SuccessIcon from '../../assets/success.svg';

function CardForm() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState('');

  const types = {
    cpf: {
      regex: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
    }
  };

  function validate(value) {
    if (value.length === 0) {
      setError(true);
      setSuccess(false);
      return false;
    } else if (types['cpf'] && !types['cpf'].regex.test(value)) {
      setError(true);
      setSuccess(true);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  const onChange = ({ target }) => {
    validate(target.value);
    setValue(target.value);
  };

  return (
    <Container error={error} success={success} hasValue={value}>
        <div>
          <form>
            <div className="formContent">
              <h3>Peça sua conta e cartão de crédito do Nubank</h3>
              <div>
                <input type="text" value={value} onChange={onChange} onBlur={onChange}/>
                <label className="label">Digite seu CPF</label>
                {error && (
                  <span>
                    <ErrorIcon />
                  </span>
                )}
                {!error && success && (
                  <span>
                    <SuccessIcon />
                  </span>
                )}
                {error && <p>Precisamos de um CPF válido.</p> }
              </div>
              <button>
                Continuar
                <FlechaIcon />
              </button>
            </div>
          </form>
        </div>
    </Container>
  );
};

export default CardForm;
