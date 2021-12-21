import React, { Component } from 'react';
import Projects from './Projects';
import Socials from "./Social";
import profile from './assets/profile.jpg'
class App extends Component
{
    state = { displayBio: false};
    // constructor()
    // {
    //     super();
    //     this.state = { displayBio: false};
    //     console.log('Component this', this);
    //
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () =>
    {
        this.setState({displayBio: !this.state.displayBio})
    }
    render()
    {
        return (
            <div>
                <img src={profile} alt='profile'/>
                <h1>Hello!</h1>
                <p>My name is Thien Huynh and I am a software engineer.</p>
                <p>I'm always looking forward to working on meaningful project.</p>
                {
                    this.state.displayBio ? (
                    <div>
                        <p>I live in Bellevue, and I code everyday</p>
                        <p>My mother language is Vietnamese</p>
                        <p>I also like playing game</p>
                        <button onClick = {this.toggleDisplayBio}>Show less</button>
                    </div>
                    ) : (
                        <div>
                            <button onClick = {this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <Socials />
            </div>
        )
    }
}
export default App;