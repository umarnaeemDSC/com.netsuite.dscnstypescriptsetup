/**
 * @NApiVersion 2.1
 */

import * as search from 'N/search';
import * as log from 'N/log';
import * as utils from '../../lib/server-utils';

export const getCustomerEntityIds = (): search.Result[] => {
    const title = 'getCustomerEntityIds :: ';
    try {
        const customerSearch = search.create({
            type: search.Type.CUSTOMER,
            filters: [
                ['isinactive', 'is', ['F']]
            ],
            columns: [
                search.createColumn({
                    name: 'entityid'
                })
            ]
        });
        const results = utils.getAllRowsFromSearch(customerSearch);
        log.debug({ title: title + 'results', details: results });
        return results;
    } catch (error) {
        log.error({ title: title + 'error', details: error });
    }
};