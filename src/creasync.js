import React from 'react'

// opts is an object
// e.g. { component, loading, error }

const creasync = opts =>
  // return class
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loaded: false,
        error: false
      }
    }

    componentDidMount() {
      opts.component
        .then((module) => {
          console.log(module);
          this.Component = module.default
          this.setState({ loaded: true })
        })
        .catch(() => {
          this.setState({ error: true })
        })
    }

    render() {
      const Component = this.Component;
      const Loading = opts.loading;
      const { loaded, error } = this.state;
      if (loaded && !error) {
        return <Component {...this.props} />;
      } else if (!loaded && error) {
        const Error = opts.error;
        return <Error />;
      }
      return <Loading />;
    }
  }

export default creasync
