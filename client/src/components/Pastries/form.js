import React, { Component } from 'react';

export default class pastriesForm extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            title: "", 
            description: "", 
            price: "", 
            imageURL: ""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.title);
        console.log(this.state.description);
        console.log(this.state.price);
        console.log(this.state.imageURL);
    }
    postPastries(req, res) {
        fetch('/api/pastries', {
            method: 'post', 
            body: JSON.stringify({
                title: this.state.title, 
                description: this.state.description, 
                price: this.state.price, 
                imageURL: this.state.imageURL 
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res.json())
        .catch((err) => {
            res.json(err)
        })
    }

}