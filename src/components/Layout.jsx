// Layout.jsx
import React, { useState } from 'react';
import Preheader from './Preheader.jsx';
import Header from './Header.jsx';
import SubscriptionPopup from './SubscriptionPopup.jsx';
import NotificationPopup from './NotificationPopup.jsx';
// import { useStaticQuery, graphql } from "gatsby"
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  const [isSubscriptionPopupOpen, setSubscriptionPopupOpen] = useState(false);
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);

  const openSubscriptionPopup = () => setSubscriptionPopupOpen(true);
  const closeSubscriptionPopup = () => setSubscriptionPopupOpen(false);

  const openNotificationPopup = () => setNotificationPopupOpen(true);
  const closeNotificationPopup = () => setNotificationPopupOpen(false);

//   const data = useStaticQuery(graphql`
//     query {
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//     }
//     `)

  return (
    <div>
      <Preheader openNotificationPopup={openNotificationPopup} />
      <Header
        openSubscriptionPopup={openSubscriptionPopup}
        openNotificationPopup={openNotificationPopup}
      />
      {children}
      <Footer />
      <SubscriptionPopup isOpen={isSubscriptionPopupOpen} onClose={closeSubscriptionPopup} />
      <NotificationPopup isOpen={isNotificationPopupOpen} onClose={closeNotificationPopup} />
    </div>
  );
};

export default Layout;
