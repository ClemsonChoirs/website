import React, { Component } from 'react';
import HorizontalCard from './HorizontalCard';
import ExpandedCard from './ExpandedCard';

class HorizontalCardWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount = () => {
    clearTimeout(this.transitionTimeout);
    window.removeEventListener('resize', this.updateWindowDimensions);
  };

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
  }

  render() {
    const { screenWidth } = this.state;
    const { concert } = this.props;

    if (screenWidth > 530) {
      return <ExpandedCard {...concert} {...this.props} />
    } else {
      return <HorizontalCard {...concert} {...this.props} />
    }
  }
}

export default HorizontalCardWrapper;