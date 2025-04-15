import React from "react";

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            UserInfo :{
                name:"Dummy",
                location:"default",
            }
        }
       
    }
   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/priyaa207");
        const json = await data.json();
        this.setState({
            UserInfo : json,
        })
    }

    
    render () {
        const {name,location,avatar_url} = this.state.UserInfo;
        
        return (
            <div className=" bg-white p-6 rounded-xl shadow-md text-center">
                <img className="w-24 h-24 mx-auto rounded-full mb-4" height={"150px;"} src={avatar_url}></img>
                <h2 className="text-lg font-semibold"> Name : {name}</h2>
                <h4 className="text-gray-500">Location : {location}</h4>
                <h4 className="text-blue-500">Contact : @Priyaa207</h4>
            </div>

        )
    };
}

export default User;