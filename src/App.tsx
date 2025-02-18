import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  // Stan przechowujący naciśnięty klawisz
  const [pressedKey, setPressedKey] = useState('Nothing was pressed yet');

  useEffect(() => {
    // Funkcja obsługująca zdarzenie 'keyup'
    const handleKeyup = (event: KeyboardEvent) => {
      setPressedKey(`The last pressed key is [${event.key}]`);
    };

    // Dodajemy nasłuchiwanie zdarzenia 'keyup' po załadowaniu komponentu
    window.addEventListener('keyup', handleKeyup);

    // Usuwamy nasłuchiwanie zdarzenia, kiedy komponent zostanie odmontowany
    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz, po montażu

  return (
    <div className="App">
      <p className="App__message">{pressedKey}</p>
    </div>
  );
};
