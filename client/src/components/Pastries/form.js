import React, { Component } from 'react';

export default class PastriesForm extends Component { 

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
    render() {
        return (
            <form onSubmit={this.postPastries.bind(this)}>
                <h3>Post Pastries for Your Coffee Shop</h3>
                <label>Pastry's Name: </label><br />
                    <input type="text" name="title" placeholder="What are you baking to make life sweeter?" /><br />
                <label>Description: </label><br />
                    <input type="text" name="description" placeholder="What's in your baked good?" /><br />
                <label>Price: </label><br />
                    <input type="text" name="price" placeholder="How much will it cost?" /><br />
                <label>Image Address: </label><br />
                    <input type="text" name="imageURL" placeholder="Do you have the address where the image is posted?" /><br />
            </form>
        )
    }
}