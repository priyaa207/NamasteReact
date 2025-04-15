import User from "./User";
const About =()=>{
    return (
        <div>
            <h1 className="text-bold item-center">About Us</h1>
            <h2>This is about us</h2>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <User name={"Priya Maurya"} location = {"Delhi"}/>
            </div>
        </div>
    )
}

export default About;