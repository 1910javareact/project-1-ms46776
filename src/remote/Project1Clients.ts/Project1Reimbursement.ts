import { userClient } from "./Project1Client";

export async function ersRemoteReimbursement(userId: number) {
    try {
        const response = await userClient.get('reimbursements//user/' + userId)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export async function ersRemoteReimbursementByStatusId(statusId: number) {
    try {
        const response = await userClient.get('reimbursements/status/' + statusId)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export async function ersRemoteSubmitReimbursement( amount:number, dateSubmitted:number, description:string,type:number) {
    const fields = {
        reimbursementId: 0,
        author: 0,
        amount: amount,
        dateSubmitted: dateSubmitted,
        dateResolved: 0,
        description: description,
        resolver: 0,
        status: 0,
        type: type
    }
    try {
        let response = await userClient.post('/reimbursements', fields)
        if (response.status === 201) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export async function ersRemoteUpdateReimbursement(reimbursementId: number, author:number, amount:number, dateSubmitted:number, dateResolved:number, description:string, resolver:number, status: number, type:number) {
    const fields = {
        reimbursementId,
        author,
        amount,
        dateSubmitted,
        dateResolved,
        description,
        resolver,
        status,
        type,
    }
    try {
        let response = await userClient.patch('/reimbursements', fields)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}