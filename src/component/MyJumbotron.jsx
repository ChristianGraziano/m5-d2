import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class MyJumbotron extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="my-5">
                <h1 className="d-flex justify-content-center">Epic Books</h1>
                <p className="d-flex justify-content-center mx-5 px-md-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatibus cupiditate facere iusto sed. Adipisci consequuntur tempora deleniti amet. Distinctio libero delectus obcaecati excepturi, non ipsum quo id quia eos.</p>

            </div>
        );
    }

}

export default MyJumbotron;
