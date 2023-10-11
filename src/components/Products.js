import React from 'react'
import {Grid} from '@mui/material'
import Illustration from '../assets/illustration.png'
import okIcon from '../assets/ok.png'
import canula from '../assets/canula.jpeg'
import gun from '../assets/gun.jpeg'
import pad from '../assets/pad.jpeg'
import needle from '../assets/lancet.jpg'
import infusion from '../assets/infusion.jpg'
import pipets from '../assets/pipets.jpg'
import feeding from '../assets/feeding.jpg'
import transfusion from '../assets/transfusion.jpg'


const Products=props=>{
    return(
        <div className='facility-container'>
            <div className='facility-header'>
                Current Products
            </div>
            <div className='facility-sub-header'>
                <div>
                    We have several primary products currently in our production line at scale.
                </div>
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
                                    <img src={canula}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6}order={{ xs: 1,md:1}}>
                                <div className='item-image-container'>
                                    <img src={pad}/>
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
                    <Grid item xs={12}>
                        <Grid container  style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6} order={{ xs: 2,md:1}}>
                                <div className='item-text-container'>
                                    <div >
                                        <div className='item-text-header'>
                                            Blood Lancet
                                        </div>
                                        <div className='item-text-description'>
                                            A blood lancet, or simply lancet, is a small medical implement used for capillary blood sampling.
                                        </div>
                                        <div className='item-items-header'>
                                            Features
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Compact design and easily attachable.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Sharp and accurate electropolished needles.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Easy twist caps.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Tri-Bevel Tip.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Ergonomic design
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} order={{ xs: 1,md:2}}>
                                <div className='item-image-container'>
                                    <img src={needle}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6} order={{ xs: 1,md:1}}>
                                <div className='item-image-container'>
                                    <img src={gun}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} order={{ xs: 2,md:2}}>
                                <div className='item-text-container'>
                                    <div >
                                        <div className='item-text-header'>
                                            Centrifuge Tube
                                        </div>
                                        <div className='item-text-description'>
                                            Centrifuge tubes are used to contain liquids during centrifugation, which separates the sample into its components by rapidly rotating it around a fixed axis
                                        </div>
                                        <div className='item-items-header'>
                                            Features
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Only 100% Medical Grade polypropylene resins are used in our Tubes. No recycled plastics or commodity grade resins.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Sustainable design and autoclavable.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Every batch sample tested in real lab procedures.
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container  style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6} order={{ xs: 2,md:1}}>
                                <div className='item-text-container'>
                                    <div >
                                        <div className='item-text-header'>
                                            IV Infusion Set
                                        </div>
                                        <div className='item-text-description'>
                                            It is an infusion set that is used to administer intravenous therapy, wherein a liquid substance is delivered directly into the patients' vein.
                                        </div>
                                        <div className='item-items-header'>
                                            Features
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Sharp and easy piercing air vanted spike.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Soft and kink resistant tubing.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Cylindrical collapsible drip chamber to visualize the flow rate.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> 180cm long cuper smooth kink resistant tubing with efficient roller controller for accurate and unrestricted flow.
                                        </div>
                                      
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} order={{ xs: 1,md:2}}>
                                <div className='item-image-container'>
                                    <img src={infusion}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6} order={{ xs: 1,md:1}}>
                                <div className='item-image-container'>
                                    <img src={pipets}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} order={{ xs: 2,md:2}}>
                                <div className='item-text-container'>
                                    <div >
                                        <div className='item-text-header'>
                                            Micropipette Tips
                                        </div>
                                        <div className='item-text-description'>
                                        Pipette Tips are disposable, autoclavable attachments for the uptake and dispensing of liquids using a pipette.
                                        </div>
                                        <div className='item-items-header'>
                                            Features
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Manufactured in a precision molding facility from 100% medical grade polypropylene.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> The highly smooth surface is hydrophobic to provide low liquid retention, increased accuracy and repeatability.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Autoclavable at 121 degree celcius and 15psi for 30 minutes.
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container  style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6} order={{ xs: 2,md:1}}>
                                <div className='item-text-container'>
                                    <div >
                                        <div className='item-text-header'>
                                            Feeding Tube
                                        </div>
                                        <div className='item-text-description'>
                                        A feeding tube is a flexible plastic tube placed into your stomach or bowel to help you get nutrition when you're unable to eat as well as you need to.
                                        </div>
                                        <div className='item-items-header'>
                                            Features
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Soft, comfortable, painless.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Super liquid absorption ability and the absorbtion is 7-9 times its weight.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Convenient to place and take out can be easily cut out accordingly.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Better biocompatibility and no rejection reaction.
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} order={{ xs: 1,md:2}}>
                                <div className='item-image-container'>
                                    <img src={feeding}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6} order={{ xs: 1,md:1}}>
                                <div className='item-image-container'>
                                    <img src={transfusion}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} order={{ xs: 2,md:2}}>
                                <div className='item-text-container'>
                                    <div >
                                        <div className='item-text-header'>
                                            Blood Transfusion Set
                                        </div>
                                        <div className='item-text-description'>
                                            Blood Transfusion set is employed for intravascular, gravity-controlled transfusion of blood or blood element.
                                        </div>
                                        <div className='item-items-header'>
                                            Features
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Double cylindrical drip chamber and ring provided with filter to prevent passage of any clot into the patient.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Soft drip chamber for easy and fast priming time.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Sharp piercing spike for easy insertion in IV Container/Blood Bag.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Double chamber with 200 micron blood filter.
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div style={{marginTop:'80px'}}/>
            <div className='facility-header'>
                Upcoming Products
            </div>
            <div className='facility-sub-header'>
                <div>
                    We have 4 products those are coming soon...
                </div>
            </div>

            
            <div className='item-body'>
                <Grid container style={{width:'100%'}}>
                <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} md={6}  order={{ xs: 2,md:1}}>
                                <div className='item-text-container'>
                                    <div >
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
                                    <img src={canula}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6}order={{ xs: 1,md:1}}>
                                <div className='item-image-container'>
                                    <img src={pad}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} order={{ xs: 2,md:2}}>
                                <div className='item-text-container'>
                                    <div >
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
                    <Grid item xs={12}>
                        <Grid container  style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6} order={{ xs: 2,md:1}}>
                                <div className='item-text-container'>
                                    <div >
                                        <div className='item-text-header'>
                                            Blood Lancet
                                        </div>
                                        <div className='item-text-description'>
                                            A blood lancet, or simply lancet, is a small medical implement used for capillary blood sampling.
                                        </div>
                                        <div className='item-items-header'>
                                            Features
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Compact design and easily attachable.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Sharp and accurate electropolished needles.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Easy twist caps.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Tri-Bevel Tip.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Ergonomic design
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} order={{ xs: 1,md:2}}>
                                <div className='item-image-container'>
                                    <img src={needle}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6} order={{ xs: 1,md:1}}>
                                <div className='item-image-container'>
                                    <img src={gun}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} order={{ xs: 2,md:2}}>
                                <div className='item-text-container'>
                                    <div >
                                        <div className='item-text-header'>
                                            Centrifuge Tube
                                        </div>
                                        <div className='item-text-description'>
                                            Centrifuge tubes are used to contain liquids during centrifugation, which separates the sample into its components by rapidly rotating it around a fixed axis
                                        </div>
                                        <div className='item-items-header'>
                                            Features
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Only 100% Medical Grade polypropylene resins are used in our Tubes. No recycled plastics or commodity grade resins.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Sustainable design and autoclavable.
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Every batch sample tested in real lab procedures.
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

export default Products