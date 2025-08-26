import React , {Component} from 'react';
import  '../../styles/PagesSick.css';
import img from "../Img/img.jpg";
import Header from "../../Components/Header";
const users = [
    {
        id : 1 , userName : 'Joud ahmed' , picture : img
    },
    {
        id : 2, userName : 'Joud ahmed', picture : img
    },
    {
        id : 3, userName : 'Joud ahmed', picture : img
    }
]
class PagesSick extends Component{
    render(){
        return(
            <div>
                      <Header />
                
                {users.map(user =>(
                        <div key={user.id} className="contianer">
                            <img className="img" src={user.picture} alt={user.userName} />
                            <h2>{user.userName}</h2>
                        </div>
                    ))}
                
            </div>
        )
    }
}




export default PagesSick;