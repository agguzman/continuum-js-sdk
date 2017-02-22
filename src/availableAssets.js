export default {
    create: {
        project: ['name'],
        cloud: ['name', 'provider', 'apiUrl', 'apiProtocol'],
        asset: ['name'],
        account: ['name', 'provider', 'login', 'password', 'defaultCloud'],
        credential: ['name', 'username', 'password'],
        tag: ['name'],
        user: ['user', 'name', 'role']
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
    update: {
        cloud: ['name'],
        user: ['user']
    },
    expo: {
        pipeline: ['pipeline'],
        project: ['project']
    },
    initiate: {
        pipeline: ['definition', 'project', 'group']
    },
    invoke: {
        plugin: ['plugin', 'method']
    },
    promote: {
        revision: ['package', 'revision', 'fullVersion', 'phase']
    },
    retry: {
        pipelineinstance: ['pi']
    },
    add: {
        cloud_keypair: ['cloud', 'name', 'privateKey'],
        object_tag: ['tag', 'object_id', 'object_type']
    },
    list: {
        assets: [],
        cloud_accounts: [],
        cloud_keypairs: [],
        cloud: [],
        credentials: [],
        tasks: []
    },
    impo: {
        pipeline: ['backup']
    }
}