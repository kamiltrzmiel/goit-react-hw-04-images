import React, { Component } from 'react';
import propTypes from 'prop-types';
import css from './searchbar.module.css';

export default class Searchbar extends Component {
    state ={
        searchQuery: '',
    };

    handleInputChange = event => {
        this.setState({searchQuery: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
    };

    render() {
        const {handleInputChange, handleSubmit} = this;

        return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={handleSubmit}>
                    <button className={css.searchFormButton} type='submit'>
                        <span className={css.searchFormButtonLabel}>Search</span>
                    </button>
                        <input
                        className={css.searchFormInput}
                         type="text"
                         autoComplete="off"
                         autoFocus
                         placeholder="Search images and photos"
                         value={this.state.searchQuery}
                         onChange={handleInputChange}
                       />   
                    
                </form>
            </header>
        );
    };
};

Searchbar.propTypes = {
    onSubmit:propTypes.func.isRequired,
};