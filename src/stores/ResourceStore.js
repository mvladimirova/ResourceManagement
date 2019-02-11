import alt from '../alt';
import ResourceActions from '../actions/ResourceActions';

class ResourceStore{
    constructor(){
        this.resources = [];
        this.errorMessage = '';

        this.bindListeners({
            handleUpdateResources: ResourceActions.UPDATE_RESOURCES,
            handleFetchResources: ResourceActions.FETCH_RESOURCES,
            handleResourcesFailed: ResourceActions.RESOURCES_FAILED
        });
    }

    handleUpdateResources(resources) {
        this.resources = resources;
    }

    handleFetchResources() {
        this.resources = [];
    }

    handleResourcesFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

export default alt.createStore(ResourceStore, 'ResourceStore');