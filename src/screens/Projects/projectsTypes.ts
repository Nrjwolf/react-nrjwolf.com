export type Projects = {
    nrjwolf_com_projects: Project[]
}

export type Project = {
    date_created: string
    date_updated: null | string
    id: number
    preview: string
    sort: null | number
    status: string
    title: string
}