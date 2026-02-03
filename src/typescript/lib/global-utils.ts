/**
 * @NApiVersion 2.1
 */

import * as search from 'N/search';
import * as log from 'N/log';

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
}