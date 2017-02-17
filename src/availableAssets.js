export default {
    create: [
        'project',
        'cloud',
        'asset',
        'account',
        'credential',
        'tag',
        'user'
    ],
    get: [
        'token',
        'system_log',
        'settings',
        'worklist',
        'pipeline',
        'pipelineinstance',
        'pi_workitems',
        'pi_data',
        'pi_changes',
        'pi_artifacts'
    ],
    update: [
        'cloud',
        'user'
    ],
    expo: [
        'pipeline',
        'project'
    ],
    initiate: [
        'pipeline'
    ],
    invoke: [
        'plugin'
    ],
    promote: [
        'revision'
    ],
    retry: [
        'pipelineinstance'
    ],
    add: [
        'cloud_keypair'
    ],
    list: [
        'assets',
        'cloud_accounts',
        'cloud_keypairs',
        'cloud',
        'credentials',
        'tasks'
    ],
    impo: [
        'pipeline'
    ]
}