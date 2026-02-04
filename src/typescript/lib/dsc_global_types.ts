export interface AccountsDataMap {
    [key: number]: {
        accountId: number,
        number: string,
        name: string,
        displayName: string,
        type: string,
        description: string,
        subsidiaries: {
            [subsidiaryId: number]: boolean
        },
        ibanNumber: string,
        routingCode: string,
        employerRef: string,
        companyNumber: string
    }
}