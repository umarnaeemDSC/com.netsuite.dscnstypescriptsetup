/**
 * @NApiVersion 2.1
 */

import * as search from 'N/search';
import * as log from 'N/log';
import { AccountsDataMap } from './dsc_global_types';

export const getAllRowsFromSearch = (searchObj: search.Search): search.Result[] => {
    const title = 'getAllRowsFromSearch :: ';
    try {
        let resultList: search.Result[] = [];
        let startPos = 0;
        let endPos = 1000;

        const searchResult = searchObj.run();
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const currList = searchResult.getRange({
                start: startPos,
                end: endPos
            });

            if (!currList || currList.length === 0) {
                break;
            }

            resultList = [...resultList, ...currList];


            //es-lint disable next line
            if (currList.length < 1000) {
                break;
            }
            startPos += 1000;
            endPos += 1000;
        }

        return resultList;
    } catch (error) {
        log.error({
            title: title + 'error',
            details: error
        });
        return [];
    }
};


export const getAccountsDataObj = () : AccountsDataMap => {
    const title = 'getAccountsDataObj :: ';
    try {
        const accountSearch = search.create({
            type: search.Type.ACCOUNT,
            filters: [
                ['isinactive', 'is', ['F']],
            ],
            columns: [
                search.createColumn({
                    name: 'internalid'
                }),
                search.createColumn({
                    name: 'number'
                }),
                search.createColumn({
                    name: 'name'
                }),
                search.createColumn({
                    name: 'displayname'
                }),
                search.createColumn({
                    name: 'type'
                }),
                search.createColumn({
                    name: 'description'
                }),
                search.createColumn({
                    name: 'subsidiarynohierarchy'
                }),
                search.createColumn({
                    name: 'custrecord_dsc_bank_iban'
                }),
                search.createColumn({
                    name: 'custrecord_dsc_acc_bank_routing_code'
                }),
                search.createColumn({
                    name: 'custrecord_dsc_account_employer_ref'
                }),
                search.createColumn({
                    name: 'custrecord_dsc_bank_company_number'
                }),
            ]
        });
        const results = getAllRowsFromSearch(accountSearch);
        const accountsDataMapObj = {};
        for (let i = 0; i < results.length; i++) {
            const accountId = +results[i].getValue({ name: 'internalid' }) as number;
            const number = results[i].getValue({ name: 'number' });
            const name = results[i].getValue({ name: 'name' });
            const displayName = results[i].getValue({ name: 'displayname' });
            const type = results[i].getValue({ name: 'type' });
            const description = results[i].getValue({ name: 'description' });
            const subsidiary = +results[i].getValue({ name: 'subsidiarynohierarchy' }) as number;
            const ibanNumber = results[i].getValue({ name: 'custrecord_dsc_bank_iban' });
            const routingCode = results[i].getValue({ name: 'custrecord_dsc_acc_bank_routing_code' });
            const employerRef = results[i].getValue({ name: 'custrecord_dsc_account_employer_ref' });
            const companyNumber = results[i].getValue({ name: 'custrecord_dsc_bank_company_number' });

            if (!accountsDataMapObj[accountId]) {
                accountsDataMapObj[accountId] = {
                    accountId,
                    number,
                    name,
                    displayName,
                    type,
                    description,
                    subsidiaries: {},
                    ibanNumber,
                    routingCode,
                    employerRef,
                    companyNumber
                };

                if (!accountsDataMapObj[accountId].subsidiaries[subsidiary]) {
                    accountsDataMapObj[accountId].subsidiaries[subsidiary] = true;
                }
            }
        }

        return accountsDataMapObj;
    } catch (error) {
        log.error({ title: title + 'error', details: error });
    }
};