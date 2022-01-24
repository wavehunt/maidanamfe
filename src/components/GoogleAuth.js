import React from "react";

class GoogleAuth extends React.Component {

    //State for sign-in status
    state = {isSignedIn:null};
    
    //load and initialize the gapi on component load
    componentDidMount () {
            
            window.gapi.load('client:auth2', async () => {
                //alert('load done');
                alert(window.gapi.client);
                window.gapi.client.init({
                'clientId': '515718912201-5o9h09qa20j5vsl1t7gunc9917ad6kck.apps.googleusercontent.com',
                'scope': 'profile',
                
                'ux_mode': 'redirect',
                'redirect_uri':'https://maidanamreact.herokuapp.com'
                
                });

                //.then(()=> {

                    //alert('ínit done');
                    
                    //const testAuth = gAuth;
                    this.auth = window.gapi.auth2.getAuthInstance();                    
                    //this.setState({auth:gapiAuth});
                    //setup listener for sign-in changes
                    this.auth.isSignedIn.listen(this.handleAuthChange);
            
                    //handle initial state
                    this.handleAuthChange(this.auth.isSignedIn.get());
                    console.log(this.auth);
                //})
                //.catch(()=> console.log('load failed'));
            });
            

    }
    
        
    /*
    useEffect(
        ()=> window.gapi.load('client:auth2', initClient),
        []
    );
    */

    //respond to sign-in changes
    handleAuthChange = (userLoggedIn) => {
        alert (userLoggedIn);
        
        if(userLoggedIn) {
            //setIsSignedIn(true);
            this.setState({isSignedIn:true})
        } else {
            //setIsSignedIn(false);
            this.setState({isSignedIn:false})
        }
    }

    onSignInClick = () => {
        //const authObj = auth=='null'?'yes':'no'
        console.log(this);
        alert('çlicked: ' + this.auth );
        //console.log('auth: ', auth)
        if(this && this.auth) {
            this.auth.signIn();
        }
    }
    onSignOutClick = () => {
        console.log(this);
        if(this && this.auth) {
            this.auth.signOut();
        }
        //window.gapi.auth2.getAuthInstance().signOut();
    }

    renderButton () {
        return this.state.isSignedIn ? 
            <button 
                    
                    onClick={this.onSignOutClick} 
                    className='ui button negative'
            >
                Logout
            </button> :
            <button
                    
                    onTouchStart={this.onSignInClick} 
                    onClick={this.onSignInClick} 
                    className='ui button link-fmt'
                    //style={{backgroundColor:'#4285F4',color:'#FFFFFF'}}
            >
                <i className='google icon'/>
                Logina
            </button>
    }

    render() {
        return (
            <div>
                {this.renderButton()}
            </div>
        )
    }
    
}

export default GoogleAuth;