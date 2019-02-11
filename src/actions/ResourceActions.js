import alt from '../alt';
import ResourceSource from '../sources/ResourceSource';

class ResourceActions {
    updateResources(resources) {
        return resources;
    }

    fetchResources() {
        return (dispatch) => {
            dispatch();
            ResourceSource.fetch()
            .then((resources) => {
                this.updateResources(resources);
            })
            .catch((error) => {
                this.resourcesFailed(error);
            })
        }
    }

    resourcesFailed(error) {
        return error;
    }
}

export default alt.createActions(ResourceActions);