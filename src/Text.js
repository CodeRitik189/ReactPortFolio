import React, { Component } from 'react'
import ThreeScene from './ThreeScene'
const str= " Hello , I am a Full Stack Developer and Designer... I like Creating stuffs. please scroll down and start exploring about myself...";
var idx=0;
export default class Text extends Component{
 constructor(props){
   super(props);
   this.state={
    text:'',
    width:window.innerWidth
   }
}
   //this.onscroll = this.onscroll.bind(this);
   componentDidMount(){
    window.addEventListener('resize', () => {
      this.setState({width:window.innerWidth});
      console.log("width is ",this.state.width)
    });
    const val = setInterval(()=>{
      let newval = str.substring(0,idx+1);
      if(str.length>idx){
       idx += 1;
      }else{
        clearInterval(this.state.id);
      }
      this.setState({text:newval});
     },120);
     this.setState({id:val});
    }
  render() {
    return (
   <div>
      <div>
       <ThreeScene  width={this.props.width}/>
      </div>
      <div>
      <section style={{backgroundColor:"black",boxShadow:"0px 0px black",marginLeft:`${(this.props.width)/7}px`}}>
         <div id="dyn" style={{width:`${(this.props.width)*3/4}px`,fontSize:`${this.props.width>800?50:35}px`}}>{this.state.text}
      </div>
      </section>
      <section style={{marginLeft:`${(this.props.width)/6}px`,width:`${(this.props.width)*16/27}px`}}>
        <h2>📜 Education</h2>
        <h4>Senior Secondary</h4>
        <p>
          SGLSIC, Auraiya 
        </p>

        <h4>Graduation</h4>
        <p>
          National Institute of technology, Agartala
        </p>

      </section>

      <section className="light" style={{marginLeft:`${(this.props.width)/5}px`,width:`${(this.props.width)*16/27}px`}}>
        <h2>👩🏽‍🚀 Projects</h2>
        <div style={{height:"350px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*3/8}px`,backgroundColor:"lightblue"}}>
        <h4><a style={{textDecoraion:"none"}} href="/">Social</a></h4>
        <p>A Social Media web Application  </p>
        </div>

        <div style={{height:"350px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*3/8}px`,backgroundColor:"lightblue",marginLeft:`${this.props.width>800?((this.props.width*12)/20)/2:5}px`}}>
        <h4><a style={{textDecoration:"none"}} href="/">InfoMovie</a></h4>
        <p>Collection of previews and ratings of movies across the world</p>
        </div>
         
        <div style={{height:"350px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*3/8}px`,backgroundColor:"lightblue"}}>
        <h4><a style={{textDecoration:"none"}} href="/">Hungry Snake</a></h4>
        <p>A Entertaining game we used to play in our childhood </p>
        </div>
        <h2>🏆 Accomplishments</h2>
      </section>

      <section className="left" style={{marginLeft:`${(this.props.width)/5}px`,width:`${(this.props.width)*16/27}px`}}>
        <h2>🌮 Experience</h2>

        <h3>BetaTesters SDE Intern</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>
        <h3>DSA enthusiast</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>
        <h3>Core TeamMember of DCC coding club NITA</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        </p>

      </section>
      <section className="left" style={{marginLeft:`${(this.props.width)/5}px`,width:`${(this.props.width)*16/27}px`}}>
        <h2>🌮 Skills</h2>

        <h3>Languages</h3>
        <p>
          C,C++,HTML5,CSS3,JAVASCRIPT,SQL
        </p>
        <h3>Development Skills</h3>
        <p>
          NodeJS,ReactJS,ExpressJS,ThreeJS
        </p>
        <h3>Developer Tools</h3>
        <p>
          VS Code, Code Blocks,Sublime
        </p>

      </section>
      <section className="left" style={{marginLeft:`${(this.props.width)/5}px`,width:`${(this.props.width)*16/27}px`}}>
        <h2>🌮 Extra Curricular</h2>

        <h3>Mentor</h3>
        <p>
          Took Mentorship Oppurtunies thorugh WeCan club 
        </p>
        <h3>Coding Trainee</h3>
        <p>
          Cleared Dobts of juniors to build an active coding culture
        </p>
      </section>
      <section className="left" style={{marginLeft:`${(this.props.width)/5}px`,width:`${(this.props.width)*16/27}px`}}>
        <h2>🌮 Contact</h2>
        <h4>Name</h4>
        <input type="text" placeholder="" />
        <h4>Email</h4>
        <input type="email" placeholder="abc@gmail.com " />
        <h4>Phone</h4>
        <input type="text" placeholder="" />
      </section>
      </div>
   </div>
    )
  }
}
