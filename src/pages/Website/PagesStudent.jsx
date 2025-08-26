import React , {Component} from 'react';
import img from '../Img/img.jpg';
import  '../../styles/pagesStudent.css';
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


class PagesStudent extends Component{

    render(){
        return(
            <div>
                      <Header />
                
                <div className="box-contianer">
                    {users.map(user =>(
                        <div key={user.id} className="contianer">
                            <img className="img" src={user.picture} alt={user.userName} />
                            <h2>{user.userName}</h2>
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}



export default PagesStudent;