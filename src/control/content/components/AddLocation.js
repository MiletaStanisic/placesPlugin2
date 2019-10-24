import React from 'react';
import LocationForm from './LocationForm';

class AddLocation extends React.Component {

  onSubmit(data) {
    this.props.onSubmit(data);
  }

  render() {
    return <LocationForm
      poiSetting={this.props.poiSetting}
      categories={ this.props.categories }
      onSubmit={ data => this.onSubmit(data) } />;
  }
}

export default AddLocation;
