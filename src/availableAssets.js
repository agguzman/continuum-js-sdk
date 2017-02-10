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
    read: [
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
    ]
};