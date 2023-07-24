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


export function timely(time: number) {
    let seconds: number = Number((time / 1000).toFixed(2));
    let minutes: number = Number((time / (1000 * 60)).toFixed(1));
    let hours: number = Number((time / (1000 * 60 * 60)).toFixed(1));
    let days: number = Number((time / (1000 * 60 * 60 * 24)).toFixed(0));
    if (seconds < 60) return seconds + " Sec";
    else if (minutes < 60) return minutes + " Min";
    else if (hours < 24) return hours + " Hrs";
    else return days + " Days"
}
