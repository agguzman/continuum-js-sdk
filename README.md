# Continuum SDK
A Javascript SDK for VersionOne Continuum

### Clone from Github
```
git clone https://github.com/agguzman/continuum-sdk
npm install
```

### Install via NPM

```
npm install continuum-sdk
```

### Axios example
```javascript
import sdk, { axiosConnector } from './continuum-sdk';
import axios from 'axios';
 
const axiosConnectedSdk = axiosConnector(axios)(sdk);
const ctm = axiosConnectedSdk('localhost', 8080, 'http')
    // .withCreds('<USERNAME>', '<PASSWORD>');
    .withToken('<TOKEN>');
 

ctm.create('project', {name: 'My First Project'})
    .then(response => console.log)
    .catch(response => console.log);
```