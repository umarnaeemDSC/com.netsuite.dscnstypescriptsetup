/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 */
define(["require", "exports", "N/log", "../lib/dsc_customization_a_client_lib", "../../lib/client-utils", "src/typescript/lib/constants"], function (require, exports, log, customAUtils, utils, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fieldChanged = void 0;
    const fieldChanged = (context) => {
        const title = 'fieldChanged :: ';
        try {
            utils.injectSpinner();
            utils.showSpinner();
            log.debug({ title: title + 'context', details: context });
            const customerData = customAUtils.getCustomerEntityIds();
            log.debug({ title: title + 'customerData', details: customerData });
            const accountsDataMapObj = utils.getAccountsDataObj();
            log.debug({ title: title + 'accountsDataMapObj', details: accountsDataMapObj });
            const approvalStatus = +context.currentRecord.getValue({ fieldId: 'custrecord_dsc_status' });
            log.debug({ title: title + 'approvalStatus', details: approvalStatus });
            if (approvalStatus == constants_1.LoanStatus.IN_PROGRESS) {
                log.debug({ title: title + '""', details: "" });
            }
        }
        catch (error) {
            log.error({ title: title + 'error', details: error });
            utils.hideSpinner();
        }
    };
    exports.fieldChanged = fieldChanged;
});
