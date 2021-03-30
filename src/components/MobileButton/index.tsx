import { useEffect, useState } from 'react';
import { Container } from './styles';

function MobileButton({ isActive, setIsActive, onClick }) {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
      <Container
        onClick={e => {
          const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
          setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          onClick && onClick(e);
          setIsActive(!isActive)
        }}
      >
        {isRippling ? (
          <span
            className="ripple"
            style={{
              left: coords.x,
              top: coords.y
            }}
          />
        ) : (
          ''
        )}
        {isActive ? <img src="/icons/close.svg" alt="Fechar menu"/> : <img src="/icons/menu.svg" alt="Fechar menu"/>}
      </Container>
  );
};

export default MobileButton;
