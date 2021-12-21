import React, {Component} from 'react';
import SOCIALS from './data/socials';

class Social extends Component
{
    render()
    {
        const {link, image} = this.props.social;

        return(
            <span>
                <a href={link}><img src={image} alt='profile' style={{width: 50, height: 50}} /></a>
            </span>
        )
    }
}

class Socials extends Component
{
    render()
    {
        return(
            <div>
                <h2>Contact with me!</h2>
                <div>{

                    SOCIALS.map(SOCIAL => {
                        return <Social key={SOCIAL.id} social={SOCIAL}/>;
                    })
                }
                </div>
            </div>
        )
    }
}

export default Socials;