import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import Logo  from '../img/wapp.png';


 function Wapp() {
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="+57 3117315221"
        accountName="Bero"
        allowClickAway       
        chatMessage="Hola! Bienvenido a Bero en que te podemos ayudar?"
        statusMessage=""
        avatar={Logo}
        notificationDelay={60000} // 1 minute
        
      
        
      />
    </div>
  )
}

export default Wapp