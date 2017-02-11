import sdk, { jqueryConnector, axiosConnector } from './../src';
import $ from 'jquery';
import axios from 'axios'

// jqueryConnector($) returns a function that accepts an sdk which is another function.
// that sdk function accepts two parameters that are post and get functions
const axiosConnected = axiosConnector(axios);

const sdkConnected = axiosConnected(sdk);
// sdkConnected is now a function that accepts a host, port and protocol

const continuum = sdkConnected('localhost', 8080, 'http');
// continuum is now an object with two properties that map to functions.
// once these functions are called they invoke another function (handleRequest)
// this invocation returns an object that has properties that map to other functions
// these functions are the actions available, create, read, update, export, etc.
// awesome
let ctm = continuum.withCreds('Administrator', 'Password1'); // now these create, read, etc. are available.

ctm.create('project', {name: 'project from modified sdk'})
    .then(console.log)
    .catch(console.log);


