import React, { useEffect } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


const Contact=props=>{

    useEffect(()=>{
        var location = new window.google.maps.LatLng(23.713112, 90.399833)
        var mapOptions = {
            zoom: 12,
            center: location,
            mapTypeId: window.google.maps.MapTypeId.RoadMap
        }
        var map = new window.google.maps.Map(document.getElementById('map-canvas'), mapOptions)
        var marker = new window.google.maps.Marker({
            position: location,
            title:"215/43, Mitford Road, BCDS Bhaban, Dhaka-1100, Bangladesh"
        });
        marker.setMap(map)
    },[])

    return(
        <div className='facility-container map-page'>
            <div className='facility-header'>
                Contact Us
            </div>
            <div className='facility-sub-header'>
                <div>
                    Hospicare Medical Devices Ltd
                </div>
            </div>
            <div className="contact-container">
                <div>
                    <div>
                        <LocationOnIcon color='primary' style={{transform:'translateY(5px)',marginRight:'10px'}}/>
                        215/43, Mitford Road, BCDS Bhaban, Dhaka-1100, Bangladesh
                    </div>
                    <div>
                        <LocalPhoneIcon color='primary' style={{transform:'translateY(5px)',marginRight:'10px'}}/>
                        +8801979958285<br/><LocalPhoneIcon style={{opacity:'0%'}}/> +8801711054024
                    </div>
                    <div>
                        <EmailIcon color='primary' style={{transform:'translateY(5px)',marginRight:'10px'}}/>
                        info@hospicarebangladesh.com<br/><EmailIcon style={{opacity:'0%',marginRight:'10px'}}/>hospicare.ltd@gmail.com
                    </div>
                </div>
            </div>
            <div className="map-container">
                <div id="map-canvas"></div>
            </div>
        </div>
    )
}

export default Contact