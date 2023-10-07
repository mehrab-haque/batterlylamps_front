import React from 'react'
import team from '../assets/team.png'
import {Grid} from '@mui/material'
import Illustration from '../assets/illustration.png'
import okIcon from '../assets/ok.png'
import md from '../assets/md.jpg'

const Company=props=>{
    return(
        <div className='facility-container'>
            <div className='company-header'>
                Battery Lamps Team
            </div>
            <div className='company-sub-header'>
                <div>
                Behind every small and mid-size business are great people. Meet the people behind ours.
                </div>
            </div>
            <div className='company-hero-bg'>
                <img src={team}/>
            </div>
            <div style={{marginTop:'50px'}}/>
            <div className='facility-header'>
                Our Chairman
            </div>
            <div className='facility-sub-header'>
                <div>
                    We have a chairman worth 30 years of experience...
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
                                            Abdul Mannan Khan
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
                                    <img src={md}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </div>

            <div style={{marginTop:'100px'}}/>
            <div className='facility-header'>
                Vice Chairman
            </div>
            <div className='facility-sub-header'>
                <div>
                    We have a vice-chairman worth 5 years of experience...
                </div>
            </div>
            <div className='item-body'>
                <Grid container style={{width:'100%'}}>
                    
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'40px'}}>
                            <Grid item xs={12} md={6}>
                                <div className='item-image-container'>
                                    <img src={md}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className='item-text-container'>
                                    <div style={{marginLeft:'40px'}}>
                                        <div className='item-text-header'>
                                            Muntasir Khan
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

export default Company