/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 */

import * as log from 'N/log';
import { EntryPoints } from 'N/types';
import * as customAUtils from '../lib/dsc_customization_a_client_lib';
import * as utils from '../../lib/client-utils';
import { LoanStatus } from 'src/typescript/lib/constants';

export const fieldChanged = (context: EntryPoints.Client.fieldChangedContext) => {
    const title = 'fieldChanged :: ';
    try {
        utils.injectSpinner();
        utils.showSpinner();
        log.debug({ title: title + 'context', details: context });
        const customerData = customAUtils.getCustomerEntityIds();
        log.debug({ title: title + 'customerData', details: customerData });
        const accountsDataMapObj = utils.getAccountsDataObj();
        log.debug({ title: title + 'accountsDataMapObj', details: accountsDataMapObj });

        const approvalStatus = +context.currentRecord.getValue({ fieldId: 'custrecord_dsc_status' }) as number;
        log.debug({ title: title + 'approvalStatus', details: approvalStatus });
        if (approvalStatus == LoanStatus.IN_PROGRESS) {
            log.debug({ title: title + '""', details: "" });
        }
    } catch (error) {
        log.error({ title: title + 'error', details: error });
        utils.hideSpinner();
    }
};