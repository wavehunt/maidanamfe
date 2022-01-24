import React from "react";

class GoogleAuth extends React.Component {

    //State for sign-in status
    state = {isSignedIn:null};
    
    //load and initialize the gapi on component load
    componentDidMount () {
            
        const gapiLoadInit = () => {            
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://apis.google.com/js/api.js'
            script.onload = () => {
              window.gapi.load('client:auth2', async () => {
                console.log('gapi loaded');
                alert('gapi loaded');
                const initApi = () => {
                   if (!window.gapi.client) {
                     console.log('client not present');
                     alert('client not present');
                     return;
                   }
                   if (!window.gapi.auth2.getAuthInstance()) {
                    window.gapi.client.init({
                        'clientId': '515718912201-5o9h09qa20j5vsl1t7gunc9917ad6kck.apps.googleusercontent.com',
                        'scope': 'profile',
                        
                        'ux_mode': 'redirect',
                        'redirect_uri':'https://maidanamreact.herokuapp.com'
                        //'redirect_uri':'http://localhost:3000'
                        
                        })
                        .then((result)=> {
                          console.log("gapi init done");
                          alert("gapi init done");
                          console.log("result: ", result);
    
                          this.auth = window.gapi.auth2.getAuthInstance();                    
                            //setup listener for sign-in changes
                            this.auth.isSignedIn.listen(this.handleAuthChange);
                
                            //handle initial state
                            this.handleAuthChange(this.auth.isSignedIn.get());
                            console.log(this.auth);
                        })
                        .catch(e=> {
                          console.log("error in init ", e);
                        })

                   } else {
                    this.auth = window.gapi.auth2.getAuthInstance();                    
                    //setup listener for sign-in changes
                    this.auth.isSignedIn.listen(this.handleAuthChange);
        
                    //handle initial state
                    this.handleAuthChange(this.auth.isSignedIn.get());
                    console.log(this.auth);
                   }
                   
                }
                setTimeout(initApi,100);
              })


            }

        document.getElementsByTagName('head')[0].appendChild(script)
          }
      
          gapiLoadInit();

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
            console.log(this.auth.signIn());
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