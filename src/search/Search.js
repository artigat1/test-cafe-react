import React, { Component } from 'react';
import axios from "axios";
import Suggestions from "./Suggestions";
import styles from './Search.module.css';

class Search extends Component {
    state = {
        searchQuery: '',
        results: []
    };

    getInfo = () => {
        axios.get(`https://swapi.co/api/people/?search=${this.state.searchQuery}`)
            .then((response) => {
                this.setState({
                    results: response.data.results
                });
            });
    };

    handleSubmit = () => {
        console.log(`Submitting query ${this.state.searchQuery}`)
    };

    handleQueryChanged = async (event) => {
        this.setState({
            searchQuery: event.target.value
        }, () => {
            if (this.state.searchQuery) {
                this.getInfo();
            } else {
                this.setState({
                    results: []
                })
            }
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.Search}>
                <input id="query"
                       type="text"
                       ref={input => this.app = input}
                       value={this.state.searchQuery}
                       placeholder="Star Wars character search?"
                       onChange={this.handleQueryChanged}
                       autoComplete="off"
                />
                <Suggestions results={this.state.results}/>
            </form>
        );
    }
}

export default Search;
