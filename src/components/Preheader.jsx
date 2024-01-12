import React, { useState } from 'react';
import Bell from '../images/bell.svg';
import FBIcon from '../images/facebook-logo.svg';
import TWIcon from '../images/twitter-logo.svg';
import NotificationPopup from './NotificationPopup';

const Preheader = () => {
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);   // Estado para controlar si el popup de notificación está abierto o cerrado


  const toggleNotificationPopup = () => {   // Función para alternar entre abrir y cerrar el popup de notificación
    setNotificationPopupOpen(!isNotificationPopupOpen);
  };

  const closeNotificationPopup = () => {  // Función para cerrar el popup de notificación
    setNotificationPopupOpen(false); 
  };

  return (
    <div className="pre-header">
      <div className="pre-header-container">
        <div className="left-icons">
          <a href="#">
            <div className="mobile-menu">
              {/* Burger menu icon */}
            </div>
          </a>
          <div className="bell-icon" onClick={toggleNotificationPopup}>
            {/* Al hacer clic sobre la campana, se invoca a la función toggleNotificationPopup (línea 11), que invierte (!) el estado de 
            «isNotificationPopup» (inicialmente «false» —linea 8— y que, por lo tanto, pasa a «true»). Dicho estado («true») se envía al
            componente <NotificationPopup» como la prop «isOpen», lo que activará la lógica de apertura del popup a través de la
            adición de la clase «open» (v. componente <NotificationPopup>) */}
            <a href="#">
              <img src={Bell} alt="bell-icon" />
            </a>
          </div>
        </div>
        <div className="right-icons">
          <div className="facebook-icon">
            <a href="https://www.facebook.com/ibaifernandezec" target="_blank" rel="noopener noreferrer">
              <img src={FBIcon} alt="facebook-icon" />
            </a>
          </div>
          <div className="twitter-icon">
            <a href="https://www.twitter.com/ibaifernandezec" target="_blank" rel="noopener noreferrer">
              <img src={TWIcon} alt="twitter-icon" />
            </a>
          </div>
        </div>
      </div>
      <NotificationPopup isOpen={isNotificationPopupOpen} onClose={closeNotificationPopup} />
    </div>
  );
};

export default Preheader;
