import { userClient } from "./Project1Client";


export async function ersRemoteReimbursement(userId: number) {
    try {
        const response = await userClient.get('reimbursements/author/userId/' + userId)
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