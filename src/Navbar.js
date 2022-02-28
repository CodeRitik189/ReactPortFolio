import React, { Component } from 'react'
import { BooleanKeyframeTrack } from 'three'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
export default class 
 extends Component {
  render() {
    return (
      <div style={{width:"100%",height:"50px",backgroundColor:"black",display:"inline-block",marginTop:"-330px",position:"fixed"}}>
         <a href="/" style={{marginLeft:"20px",textDecoration:"none",color:"white",fontWeight:"bold",fontSize:`${this.props.width>500?30:20}px`,textShadow:"2px 2px blue"}}>Ritik Tripathi</a>
         <a href="/" style={{marginLeft:`${this.props.width>500?40:20}px`,textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",textShadow:"2px 2px blue",width:"45px",height:"50px",border:"0.3px solid white",borderRadius:"20%"}}><LinkedInIcon /></a> 
         <a href="/" style={{marginLeft:`${this.props.width>500?40:20}px`,textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",textShadow:"2px 2px blue",width:"45px",height:"50px",border:"0.3px solid white",borderRadius:"20%"}}><GitHubIcon /></a>
         <a href="/" style={{marginLeft:`${this.props.width>500?30:20}px`,textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",textShadow:"2px 2px blue",width:"45px",height:"50px",border:"0.3px solid white",borderRadius:"20%"}}><InstagramIcon /></a>
      </div>
    )
  }
}
