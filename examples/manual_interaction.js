import sdk, { axiosConnector } from './../src';
import axios from 'axios'

const axiosConnectedSdk = axiosConnector(axios)(sdk);
const ctm = axiosConnectedSdk('localhost', 8080, 'http').withCreds('Administrator', 'Password1');

//find each of the users I provided in the response
//doesn't diff the response's list of users with mine (i.e. if there are additional users, this won't fail)
const testAssignedToUsers = (response, assignees) => {
    const assigneeIncluded = (assignee) => response.data.Response[0].plugin.args.assignto.includes(assignee);
    return assignees.every(assigneeIncluded);
};

// project name, assignees on a pipeline, and the pipeline
const PROJECT = 'Project-1-for-testing';
const GROUP_FOR_PIPELINE = 'group';
const ASSIGN_TO_USERS = ['administrator'];
const ASSIGN_TO_TAGS = ['startsWithA'];
const PIPELINE = {
    'actions': [],
    'dependencies': [],
    'description': '',
    'globals': {},
    'interactive': true,
    'name': 'my-interactive-pipeline-3',
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
                                    'assignto': ASSIGN_TO_USERS,
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
                            'tags': ASSIGN_TO_TAGS,
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

// ctm.create('tag', {name: 'manual1'}).then(()=>{
//     ctm.create('user', {
//         user: 'claire123',
//         name: 'Claire Moss',
//         role: 'User'})
//         .then((response)=>{
//             const id = response.data.Response._id;
//             ctm.add('object_tag',{
//                 tag: 'manual1',
//                 object_id: id,
//                 object_type: 1 //usertype is 1
//             })
//         });
// });



ctm.create('project', { name: PROJECT })
    .then(() => {

        ctm.impo('pipeline', { backup: PIPELINE })
            .then(() => {

                ctm.initiate('pipeline', {
                    definition: PIPELINE['name'],
                    project: PROJECT,
                    group: GROUP_FOR_PIPELINE
                }).then(response => {

                    const name = response.data.Response.name;

                    //find pending pipeline
                    ctm.get('worklist', {
                        filter: name
                    }).then(response => {
                        console.log('name of pipeline', name);
                        console.log("response assignto values: ",response.data);
                        const actual = testAssignedToUsers(response, ASSIGN_TO_USERS);
                        console.log(`Pass: ${actual}`);

                    }).catch(console.log)
                }).catch(console.log)
            }).catch(console.log)
    }).catch(console.log);
