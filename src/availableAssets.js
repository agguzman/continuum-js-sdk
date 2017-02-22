export default {
    add: {
        cloud_keypair: ['cloud', 'name', 'privateKey'],
           object_tag: ['tag', 'objectId', 'objectType']
    },
    },
    cancel: {
        pipelineinstance: ['pi']
    },
    create: {
           project: ['name'],
             cloud: ['name', 'provider', 'apiUrl', 'apiProtocol'],
             asset: ['name'],
           account: ['name', 'provider', 'login', 'password', 'defaultCloud'],
        credential: ['name', 'username', 'password'],
               tag: ['name'],
              user: ['user', 'name', 'role']
    },
    expo: {
        pipeline: ['pipeline'],
        mproject: ['project']
    },
    get: {
                   token: [],
              system_log: [],
                settings: [],
                worklist: [],
                pipeline: ['pipeline'],
        pipelineinstance: ['pi'],
            pi_workitems: ['pi'],
                 pi_data: ['pi'],
              pi_changes: ['pi'],
            pi_artifacts: ['pi']
    },
    impo: {
        pipeline: ['backup']
    },
    initiate: {
        pipeline: ['definition', 'project', 'group']
    },
    invoke: {
        plugin: ['plugin', 'method']
    },
    list: {
                assets: [],
        cloud_accounts: [],
        cloud_keypairs: [],
                 cloud: [],
           credentials: [],
                 tasks: []
    },
    promote: {
        revision: ['package', 'revision', 'fullVersion', 'phase']
    },
    retry: {
        pipelineinstance: ['pi']
    },
    update: {
        cloud: ['name'],
         user: ['user']
    }
}