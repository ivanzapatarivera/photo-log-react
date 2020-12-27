import React, { Component } from "react";

export default class ProductForm extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.title);
        console.log(this.state.description)
    }

    postProduct(req, res) {
        fetch('/api/product', {
            method: 'post',
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description
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
            <form onSubmit={this.postProduct.bind(this)}> 
                <label for="title">Product Name: </label><br />
                    <input type="text" name="title" placeholder="Enter product name" onChange={this.onChangeHandler} /><br />
                <label for="description">Product Description: </label>
                    <input type="text" name="description" placeholder="Enter product's description" onChange={this.onChangeHandler} /><br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
