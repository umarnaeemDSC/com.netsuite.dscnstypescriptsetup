/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScrit
 */

import * as log from 'N/log';
import { EntryPoints } from 'N/types';

export const beforeLoad = (context: EntryPoints.UserEvent.beforeLoadContext) => {
    const title = 'beforeLoad :: ';
    try {
        const form = context.form;
        log.debug({ title: title + 'form', details: form });
    } catch (error) {
        log.error({ title: title + 'error', details: error });
    }
}

export const beforeSubmit = (context: EntryPoints.UserEvent.beforeSubmitContext) => {
    const title = 'beforeSubmit :: ';
    try {
        const { newRecord } = context;
        log.debug({ title: title + 'newRecord', details: newRecord });
    } catch (error) {
        log.error({ title: title + 'error', details: error });
    }
}


export const afterSubmit = (context: EntryPoints.UserEvent.afterSubmitContext) => {
    const title = 'afterSubmit :: ';
    try {
        log.debug({ title: title + 'context', details: context });
        
    } catch (error) {
        log.error({ title: title + 'error', details: error });
    }
}