import React from 'react'
import {Grid} from '@mui/material'
import Illustration from '../assets/illustration.png'
import okIcon from '../assets/ok.png'

const Facility=props=>{
    return(
        <div className='facility-container'>
            <div className='facility-header'>
                FACILITY
            </div>
            <div className='facility-sub-header'>
                <div>
                HMD Healthcare strives to set a benchmark when it comes to manufacturing medical consumables and is helping save human lives across the globe since 1957.
                </div>
            </div>
            <div className='facility-video-container'>
                <iframe src="https://www.youtube.com/embed/61Lu03Q9tls?si=E2yTRabUt7cNNT5u?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow='autoplay' allowfullscreen></iframe>
            </div>
            <div className='facility-header between'>
                Our Motto
            </div>
            <div className='item-body'>
                <Grid container style={{width:'100%'}}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} md={6}  order={{ xs: 2,md:1}}>
                                <div className='item-text-container'>
                                    <div>
                                        <div className='item-text-header'>
                                            IV Cannula (IV Catheter)
                                        </div>
                                        <div className='item-text-description'>
                                        An IV is a small plastic tube, inserted into a vein, usually in your hand or arm. An IV is a small plastic tube, inserted into a vein, usually in your hand or arm. An IV is used to: provide fluids when you are dehydrated or can't drink.
                                        </div>
                                        <div className='item-items-header'>
                                            Features
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Intravenous catheter with integrated injection port and vanve for peripheral catheterisation.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Permits needle-free adminstration of bolus medications during infusion.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Back-cut needle bevel and tapered end of the PTFE catheter allows insertion and minimises the risk of vein damage.
                                        </div>
                                      
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}  order={{ xs: 1,md:2}}>
                                <div className='item-image-container'>
                                    <img src={Illustration}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6}order={{ xs: 1,md:1}}>
                                <div className='item-image-container'>
                                    <img src={Illustration}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} order={{ xs: 2,md:2}}>
                                <div className='item-text-container'>
                                    <div>
                                        <div className='item-text-header'>
                                            Alcohol Pad
                                        </div>
                                        <div className='item-text-description'>
                                            Alcohol prep pads protect the body from potentially harmful germs when an injection is administered, or the skin will be cut somehow
                                        </div>
                                        <div className='item-items-header'>
                                            Features
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Alcohol swabs contain 70% isopropyl alcohol for optimum antibacterial action.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Individually wrapped in layers, our alcohol swabs provide an airtight seal that prevents leakage and drying.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Both home and hospital use.
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Facility