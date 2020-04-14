import React from 'react';

class ZipSearch extends React.Component{
    state = {zips: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.zips)
    };

    render(){
        return (
            <div className ="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Zip</label>
                        <input 
                            type="text"
                            value={this.state.zips}
                            onChange={e => this.setState({zips : e.target.value})}
                        />  
                    </div>
                </form>
            </div>
        );
    }
}

export default ZipSearch;