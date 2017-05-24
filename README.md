# Creasync [![Build Status](https://travis-ci.org/therealedsheenan/creasync.svg?branch=master)](https://travis-ci.org/therealedsheenan/creasync) [![Dependency Status](https://dependencyci.com/github/therealedsheenan/creasync/badge)](https://dependencyci.com/github/therealedsheenan/creasync)
Asynchronous route and component for react.

Using webpack chunking, the imported component's chunk will be automatically be created.
 With this, We can also implement the lazy loading component and error component.

### Methods
The `creasync` method accepts an object.

`component` - component path.

`error` - error component to be rendered.

`loading` - loading component to be rendered.

### Sample
```
import creasync from 'creasync'

const NewComponent = creasync({
    component: System.import('url-to-component'),
    error: () => (<div>Something went wrong...</div>),
    loading: () => (<div>loading component...</div>)
})
```

### Examples
See the examples directory.

run the server
```
npm run examples:serve
```
then run webpack

```
npm run examples:webpack
```

#### Disclaimer
Work in progress