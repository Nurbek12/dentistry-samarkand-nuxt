export interface Stock {
    id?: String
    name?: string
    name_ru: string
    name_uz?: string

    image?: string
    thumb?: string
    
    description_ru: string
    description_uz: string
  
    content: string
    discount: number
  
    start_date: string
    end_date: string
  
    created_at?: string
    updated_at?: string
}

export interface Article {
    id?: String
    
    author: string
    title: string
    description: string
    image?: string
    thumb?: string
    content: string
    images: string[]
    publish: boolean
  
    created_at?: string
    updated_at?: string
}
  
export interface Specialty {
    id?: string
    name?: string
    image?: string
    thumb?: string

    name_ru: string
    name_uz: string
  
    // doctors_id?: string[]
    doctors?: Doctor[]
  
    created_at?: string
    updated_at?: string
}
  
export interface Doctor {
    id?: string
    name: string
    image?: string
    thumb?: string

    speciality_id?: String[]
    speciality?: Specialty[]
    reviews?: Review[]
  
    experience: string
    education: string
    content: string
  
    rating: number
  
    phone?: string
    tg: string
    inst: string
    fb: string
    in: string
    publish: boolean
  
    appointments?: Appointment[]
  
    created_at?: string
    updated_at?: string
}
  
export interface Service_Category {
    id?: string
    name?: string
    name_ru: string
    name_uz: string
    image?: string
    thumb?: string
  
    services?: Service[]
  
    created_at?: string
    updated_at?: string
}
  
export interface Service {
    id?: string
    
    image?: string
    thumb?: string
    name_ru: string
    name_uz: string
  
    description_ru: string
    description_uz: string

    category_id?: number | null
    category?: Service_Category

    contents?: Content[]
  
    price: number
    publish: boolean
  
    created_at?: string
    updated_at?: string
}
  
export interface FAQs {
    id?: String
    
    title_ru?: string
    title_uz?: string
    content_ru?: string
    content_uz?: string
    publish: boolean
  
    created_at?: string
    updated_at?: string
}
  
export interface Appointment {
    id?: string
  
    name: string
    phone: string
    doctorid?: string
    doctor?: Doctor
    
    check: boolean
    
    created_at?: string
    updated_at?: string
}
  
export interface Review {
    id?: string
  
    firstname: string
    lastname?: string
    message: string
    publish?: boolean
    rate: number

    doctor_id?: number
    doctor?: Doctor
    
    created_at?: string
    updated_at?: string
}
  
export interface Admin {
    id?: String
    
    login: string
    password: string
  
    created_at?: string
    updated_at?: string
}

export interface News {
    id?: string

    title: string
    description: string
    image?: string
    thumb?: string
    date: string
    publish: boolean
  
    content: string

    created_at?: string
    updated_at?: string
}

export interface Equipment {
    id?: string
  
    images: string[]
    title: string
    description: string
    publish: boolean

    created_at?: string
    updated_at?: string
}

export interface Gallery {
    id?: string
    title: string
    type?: string
    cover: string
    images: string[]
    thumb?: string
    video?: string
    publish: boolean
  
    created_at?: string
    updated_at?: string
}
  
export interface Laboratory {
    id?: string
    name?: string
    image?: string
    thumb?: string

    experience: string
    education: string
  
    content?: String
  
    rating?: number
  
    phone?: string
    tg: string
    inst: string
    fb: string
    in: String
    publish: boolean
  
    created_at?: string
    updated_at?: string
}
  
export interface Content {
    id?: string
  
    title: string
    description: string
    publish: boolean
  
    serivce_id?: string
    service: Service
  
    created_at?: string
    updated_at?: string
}