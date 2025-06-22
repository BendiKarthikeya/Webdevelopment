import fileLog from "./utils/filelog";

export const environment = process.env.NODE_ENV ;
export const timezone = process.env.TZ;

export const isDev = environment === 'deployment';

export const logging = {
    file: process.env.FILE_LOG_ENABLED === 'true',
};

export const operation = {
    wakeUpTimeMs: parseInt(process.env.WAKE_UP_TIME_MS || '0'),
    workTimeMs: parseInt(process.env.WORK_TIME_MS || '0'),
    workWaitMs: parseInt(process.env.WORK_WAIT_MS || '0'),
}