import sdk, { axiosConnector, testAssignto } from './../src';
import axios from 'axios'


const axiosConnectedSdk = axiosConnector(axios)(sdk);
const ctm = axiosConnectedSdk('localhost', 8080, 'http').withCreds('Administrator', 'Password1');





const PROJECT = 'Project-1-for-testing';
const ASSIGN_TO = ['administrator'];

const PIPELINE = {
    'actions': [],
    'dependencies': [],
    'description': '',
    'globals': {},
    'interactive': true,
    'name': 'my-interactive-pipeline',
    'phases': [
        {
            'name': '',
            'stages': [
                {
                    'name': '',
                    'steps': [
                        {
                            'name': '',
                            'plugin': {
                                'args': {
                                    'assignto': ASSIGN_TO,
                                      'text': 'Yes or No?',
                                    'title': 'Confirm or Deny this.'
                                },
                                'kind': 'confirm',
                                'label': 'Flow - Interact - Confirmation',
                                'method': 'confirmation',
                                'module': 'interact',
                                'name': 'flow',
                                'type': 'interaction'
                            },
                            'tags': [],
                            'when': 'always'
                        }
                    ]
                }
            ]
        }
    ],
    'pipelineglobals': {},
    'summary': []
};


// ctm.create('project', {name: PROJECT})
//     .then(() => {
//
//         ctm.impo('pipeline', PIPELINE)
//             .then(() => {
//
//                 ctm.initiate('pipeline', {
//                     definition: PIPELINE['name'],
//                     project: PROJECT,
//                     group: 'debug'
//                 }).then(() => {
//
//                     ctm.get('worklist',{
//                         filter: PIPELINE['name']
//                     }).then((response) => {
//
//                             const actual = testAssignto(response, ASSIGN_TO);
//                             console.log(`Pass: ${actual}`);
//
//                         }).catch(console.log)
//                     }).catch(console.log)
//                 }).catch(console.log)
//         }).catch(console.log);


ctm.get('worklist', {})
    .then(response => {
        console.log(response);
        const actual = testAssignto(response, ASSIGN_TO);
        console.log(actual)
    });

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
//
// test('Assignees should be present in a pending pipeline', done => {
//
//     return ctm.get('worklist', {})
//         .then(response => {
//             // const actual = testAssignto(response, ASSIGN_TO);
//             expect(true).toEqual(true);
//             done()
//         }).catch(err => {
//             console.log(err)
//             expect(true).toEqual(true);
//             done()
//         })
// });
