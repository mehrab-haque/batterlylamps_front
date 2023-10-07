import React from 'react'
import {Grid} from '@mui/material'
import Illustration from '../assets/illustration.png'
import okIcon from '../assets/ok.png'
import canula from '../assets/canula.jpeg'
import gun from '../assets/gun.jpeg'
import pad from '../assets/pad.jpeg'
import needle from '../assets/needle.jpeg'

const Products=props=>{
    return(
        <div className='facility-container'>
            <div className='facility-header'>
                Current Products
            </div>
            <div className='facility-sub-header'>
                <div>
                    We have 4 products currently in our production line at scale.
                </div>
            </div>

            
            <div className='item-body'>
                <Grid container style={{width:'100%'}}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <div className='item-text-container'>
                                    <div style={{marginLeft:'40px'}}>
                                        <div className='item-text-header'>
                                            Canula
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
                                    <img src={canula}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6}>
                                <div className='item-image-container'>
                                    <img src={pad}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className='item-text-container'>
                                    <div style={{marginLeft:'40px'}}>
                                        <div className='item-text-header'>
                                            Alcohol Pad
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
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <div className='item-text-container'>
                                    <div style={{marginLeft:'40px'}}>
                                        <div className='item-text-header'>
                                            Needle
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
                                    <img src={needle}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6}>
                                <div className='item-image-container'>
                                    <img src={gun}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className='item-text-container'>
                                    <div style={{marginLeft:'40px'}}>
                                        <div className='item-text-header'>
                                            Needle Gun
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
                            <Grid item xs={12} md={6}>
                                <div className='item-text-container'>
                                    <div style={{marginLeft:'40px'}}>
                                        <div className='item-text-header'>
                                            Canula
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
                                    <img src={canula}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6}>
                                <div className='item-image-container'>
                                    <img src={pad}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className='item-text-container'>
                                    <div style={{marginLeft:'40px'}}>
                                        <div className='item-text-header'>
                                            Alcohol Pad
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
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <div className='item-text-container'>
                                    <div style={{marginLeft:'40px'}}>
                                        <div className='item-text-header'>
                                            Needle
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
                                    <img src={needle}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6}>
                                <div className='item-image-container'>
                                    <img src={gun}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className='item-text-container'>
                                    <div style={{marginLeft:'40px'}}>
                                        <div className='item-text-header'>
                                            Needle Gun
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

export default Products