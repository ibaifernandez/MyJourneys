import React, { useEffect } from 'react';
import '../styles/NotificationPopup.css';

const NotificationPopup = ({ isOpen, onClose }) => { // Estos dos valores vienen traídos de <Preheader>: el primero como un estado (true/false) y el segundo como una función («closeNotificationPopup»).
  useEffect(() => { // El useEffect se pone en marcha por vez primera al montar el componente —es decir, cuando el popup de notifaciones aparece—.
    const handleEscKeyPress = (event) => { // Es una función que, teniendo en cuenta un evento —luego se añade cuál (línea 13)—... 
      if (event.key === 'Escape') { // ... si ese evento equivale a la tecla «Escape»...
        onClose(); // ... ejecuta la función «onClose» (que, recordemos, remite a la función «CloseNotificationPopup que ha llegado aquí como el prop «onClose»).
      }
    };

    document.addEventListener('keydown', handleEscKeyPress); // Agrega un event listener cuando el componente se monta de tipo keydown y aplica la función handleEscKeyPress a dicho evento.
 

    return () => { // Elimina el event listener cuando el componente se desmonta (función de limpieza)
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [onClose]); // Este useEffect se ejecuta cada vez que «onClose» se ejecuta. 

  if (!isOpen) return null; // Ahora bien, el useEffect se ejecuta para añadir un método de cierre al popup (a través de la tecla «Esc») en el momento en el que se activa —que es cuando se abre—
                            // pero si «isOpen» (prop con valor equivalente a «isNotificationPopOpen» del componente <Preheader>) viene como «false», devuelve nulo y la función se acaba; es decir
                            // no se ejecuta el siguiente return (línea 28) que es que hace tomar efecto al código del popup en sí mismo. O dicho de otro modo, el popup es inexistente —y la función
                            // se interrumpe (return) en tanto que lo sea hasta que un clic en la campana del componente <Preheader> cambia a nivel local (es decir, dentro del mismo componente 
                            // <Preheader>) el estado de «isNotificationPopupOpen» de «false» —estado incial definido en dicho commponente— a «true». En el momento en que dicho estado cambia, el
                            // componente <Preheader> vuelve a montarse. Dicho componente incluye el componente <NotificationPopUp> como parte de su código, pero esta vez se montará con «isOpen»
                            // equivalente al valor de isNotificationPopupOpen, que ahora es «true». Como es «true», al ejecutarse el código del presente componente (<NotificationPopup>), se salta
                            // la línea 20 —ya que «isOpen» no es «false»— y ejecuta el siguiente «return» que, en este caso, equivale al código del popup en sí mismo.
    return (
        <div>
            
            <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div> {/* Esta línea de código representa un overlay que se muestra sobre la interfaz cuando «isOpen» es «true»,
            indicando que el popup de notificaciones está abierto. Una técnica de renderizado condicional de clases CSS es utilizada para agregar la clase «open» al overlay cuando «isOpen» es «true».
            Esto permite aplicar estilos específicos cuando el overlay está abierto. Además, se agrega un evento «onClick» que ejecuta la función «onClose» cuando el overlay recibe un clic.
            Una interpretación humana de esta línea sería:
                Dentro del <div> con «className» equivalente a «overlay», si «isOpen» es «true», añade «open»; de otro modo, no añadas nada. */}
            <div className={`notification-popup ${isOpen ? 'open' : ''}`}> {/* Igualmente, el popup en sí se mostrará cuando «isOpen» es igual a «true» ). */}
            <p className="notifications-popup-message">You've got 0 notifications.</p>
            <button onClick={onClose}>Close</button>
            </div>
        </div>
        );
    }                          

export default NotificationPopup;
