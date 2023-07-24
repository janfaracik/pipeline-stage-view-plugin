import {BuildStatus} from "../models/Build";

export function buildStatusToClass(status: BuildStatus) {
    const map: {[key in BuildStatus]: string} = {
        'NOT_EXECUTED': '',
        'ABORTED': '',
        'SUCCESS': '--success',
        'IN_PROGRESS': '--in-progress',
        'PAUSED_PENDING_INPUT': '',
        'FAILED': '--destructive',
        'UNSTABLE': '--warning'
    }

    return map[status];
}
