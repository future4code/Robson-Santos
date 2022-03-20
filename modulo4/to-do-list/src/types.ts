export type user = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

export type task = {
    id: string,
    title: string,
    limitDate: any,
    creatorUserId: string
}