import React from 'react';
import Link from './Link.js'

const links = ["https://reactjs.org/", "https://www.google.com/search?q=library+vs+framework&rlz=1C5GCEM_enUS944US945&oq=library+vs+fra&aqs=chrome.0.0j69i57j0l8.5399j0j7&sourceid=chrome&ie=UTF-8", "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"]

export default class LinkContainer extends React.Component{

    renderLinks(){
        // debugger;
        return links.map(link => <Link href={link}/>)
    }
    f
    
    render(){
        return(
            <>
                <h2>Important Links</h2>
                <ul>
                    {this.renderLinks()}
                    {console.log(this.props)}
                </ul>
            </>
        )
    }
}

// export default LinkContainer;