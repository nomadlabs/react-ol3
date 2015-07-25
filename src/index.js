import ol from 'openlayers';
import React from 'react';

class Map extends React.Component {

  static propTypes = {
    data: React.PropTypes.array,
    zoom: React.PropTypes.number,
    target: React.PropTypes.string,
    center: React.PropTypes.array
  };

  static defaultProps = {
    data: [],
    center: [0, 0],
    zoom: 2,
    target: 'map'
  };

  constructor(props) {
    super(props);
    this.state = {
      id: props.target
    };
  }

  componentDidMount() {
    this.olMapElement = new ol.map(this.state.id);
    super.componentDidMount();
    this.setState({map: this.olMapElement});
  }

  shouldComponentUpdate(nextProps, nextState) {
  }

  render() {
    const map = this.olMapElement;

    return(
      <div id={this.state.id}>
      </div>
    );
  }
}

export { Map }
