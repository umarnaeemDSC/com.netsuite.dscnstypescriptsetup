/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScrit
 */
define(["require", "exports", "N/log", "../lib/dsc_customization_a_server_lib"], function (require, exports, log, customAUtils) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.afterSubmit = exports.beforeSubmit = exports.beforeLoad = void 0;
    const beforeLoad = (context) => {
        const title = 'beforeLoad :: ';
        try {
            const form = context.form;
            log.debug({ title: title + 'form', details: form });
        }
        catch (error) {
            log.error({ title: title + 'error', details: error });
        }
    };
    exports.beforeLoad = beforeLoad;
    const beforeSubmit = (context) => {
        const title = 'beforeSubmit :: ';
        try {
            const { newRecord } = context;
            log.debug({ title: title + 'newRecord', details: newRecord });
        }
        catch (error) {
            log.error({ title: title + 'error', details: error });
        }
    };
    exports.beforeSubmit = beforeSubmit;
    const afterSubmit = (context) => {
        const title = 'afterSubmit :: ';
        try {
            log.debug({ title: title + 'context', details: context });
            const customerData = customAUtils.getCustomerEntityIds();
            log.debug({ title: title + 'customerData', details: customerData });
            log.debug({ title: title + 'title', details: title });
        }
        catch (error) {
            log.error({ title: title + 'error', details: error });
        }
    };
    exports.afterSubmit = afterSubmit;
});
