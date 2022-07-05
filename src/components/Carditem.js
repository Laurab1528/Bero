
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/style.css";
import "../components/stylo.css";
import React from 'react';
import ProgressBar from "../components/Progress";
import { CCardBody } from '@coreui/react';
import { CCardImage } from '@coreui/react';
import { CCardText } from '@coreui/react';
import { CCardTitle } from '@coreui/react';
import { Dimensions } from 'react-native';
import Share from "../components/Share"
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.height * 0.4); 
const imageWidth = Math.round(dimensions.width * 0.4);

const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    //{ bgcolor: "#00695c", completed: 30 },
    //{ bgcolor: "#ef6c00", completed: 53 },
  ];

const Carditem = ({images}) => {
 

    return (
        <>
        <div className="tag">
            
        </div>
        <div className="imgslider"> 


            {images.map((item) => (
                
                <CCardBody>
                <div >
                <CCardTitle><h3>{item.name}</h3></CCardTitle>         
                <CCardImage orientation="top" style={{ height: imageHeight, width: imageWidth }}  src={item.src} alt={item.alt} />    
                <CCardText><h1>{item.ubicacion}</h1></CCardText>
                <CCardText className="text-medium-emphasis"><h1>Precio: {item.price}</h1></CCardText>
                <CCardText><h1>Monto Mínimo: {item.amount}</h1></CCardText>
                <CCardText><h1>Rentabilidad esperada: {item.rentabilidad}</h1></CCardText>
                <CCardText><h1>Gestor: {item.gestor}</h1></CCardText>
                <div className="App">
                {testData.map((item, idx) => (
                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                ))}
                </div>
                </div>
                <Share/>
                </CCardBody>
                
            ))}

                            
                          
        </div>
            </>
    )
    }
    export default Carditem;
    

 
