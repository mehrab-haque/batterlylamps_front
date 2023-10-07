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
                Rely on experts to eliminate HR, Payroll, & Benefits challenges so you can focus on your business
                </div>
            </div>
            <div className='facility-video-container'>
                <iframe src="https://www.youtube.com/embed/61Lu03Q9tls?si=E2yTRabUt7cNNT5u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='facility-header between'>
                Advisory & Outsourced Services
            </div>
            <div className='item-body'>
                <Grid container style={{width:'100%'}}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <div className='item-text-container'>
                                    <div style={{marginLeft:'40px'}}>
                                        <div className='item-text-header'>
                                            Advisory
                                        </div>
                                        <div className='item-text-description'>
                                            Our Advisory Services keep things simple by giving you unlimited access to our team of HR and payroll experts which advise you through your toughest situations.
                                        </div>
                                        <div className='item-items-header'>
                                            What's included?
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Dealing with difficult employee situations
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Dealing with difficult employee situations abcdefssss
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Dealing with difficult employee situations abcdefssss
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Dealing with difficult employee situations abcdefssss
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className='item-image-container'>
                                    <img src={Illustration}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6}>
                                <div className='item-image-container'>
                                    <img src={Illustration}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className='item-text-container'>
                                    <div style={{marginLeft:'40px'}}>
                                        <div className='item-text-header'>
                                            Advisory
                                        </div>
                                        <div className='item-text-description'>
                                            Our Advisory Services keep things simple by giving you unlimited access to our team of HR and payroll experts which advise you through your toughest situations.
                                        </div>
                                        <div className='item-items-header'>
                                            What's included?
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Dealing with difficult employee situations
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Dealing with difficult employee situations abcdefssss
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Dealing with difficult employee situations abcdefssss
                                        </div>
                                        <div className='item-items-item'>
                                            <img src={okIcon}/> Dealing with difficult employee situations abcdefssss
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