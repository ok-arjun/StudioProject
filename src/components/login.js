import './login.css';

function Login(){
    return(
        <div className="container">
            <h5 className="loginheading">Login</h5>
            <div className="login">
                <form>
                    <label for="username">Username :</label><label><input type="text" id="username"/></label><br/>
                    <label for="password">Password :</label><label><input type="password" id="password"/></label><br/>
                    <button className="btn btn-primary">Login</button><label><a href="#">Register for newuser</a></label>
                </form>
            </div>
        </div>
    );
}

export default Login;