import React from 'react';
import ResourceStore from '../stores/ResourceStore';
import ResourceActions from '../actions/ResourceActions';

export default class Resources extends React.Component{
    constructor() {
        super();
        this.state = ResourceStore.getState();
        
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        debugger;
        ResourceStore.listen(this.onChange);

        ResourceActions.fetchResources();
    }

    componentWillUnmount() {
        ResourceStore.unlisten(this.onChange);
    }

    onChange(state) {
        debugger;
        this.setState(state);
    }

    render() {
        if(this.state.errorMessage) {
            return <div>Something is wrong</div>
        }

        return (
            <ul>
                {this.state.resources.map((resource) => {
                    return (
                        <li>{resource.name}</li>
                    );
                })}
            </ul>
        );
    }
};