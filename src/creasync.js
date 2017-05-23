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
        error: true
      }
    }

    componentDidMount() {
      opts.component
        .then((module) => {
          this.Component = module.default
          this.setState({ loaded: true })
        })
        .catch(() => {
          this.setState({ error: true })
        })
    }

    render() {
      const { loaded, error } = this.state
      const Component = this.Component
      const Loading = opts.loading
      const Error = opts.error

      if (loaded && !error) {
        return <Component {...this.props} />
      } else if (error) {
        return <Error />
      }
      return <Loading />
    }
  }

export default creasync
