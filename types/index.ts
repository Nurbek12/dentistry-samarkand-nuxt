export interface Review {
    id?: number
    firstname: string
    lastname: string
    phone?: string
    email?: string
    message: string
    publish?: boolean
    
    created_at?: string
    updated_at?: string
}

export interface Doctor {
    id?: number
    phone?: String
    image?: string
    thumb?: string
    name: string
    specialty: string
    experience: string
    education: string
    languages?: string[]
    tg?: string
    inst?: string
    fb?: string
    in?: string
    publish: boolean

    created_at?: string
    updated_at?: string
}

export interface Service {
    id?: number
    icon?: string
    title: string
    title_uz?: string
    description: string
    description_uz?: string
    price?: string
    publish?: boolean
    
    created_at?: string
    updated_at?: string
}

export interface FAQs {
    id?: number
    title: string
    title_uz?: string
    content: string
    content_uz?: string
    publish?: boolean

    created_at?: string
    updated_at?: string
}

export interface Appointment {
    id?: number
    name: string
    phone: string
    doctor?: Doctor
    check: boolean

    created_at?: string
    updated_at?: string
}