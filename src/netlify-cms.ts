export interface NetlifyCMSContent {
  companies: Company[]
  experiences: Experience[]
  courses: Course[]
  profile: Profile
  skill: Skill
}
export interface Company {
  id: string
  name: string
  picture?: string
  url?: string
  address?: string
}
export interface Experience {
  id: string
  title: string
  visible: boolean
  picture?: string
  company: Company
  startDate: string
  endDate?: string
  url?: string
  tags?: string[]
  hideDescription?: boolean
  description: string
}
export interface Attachment {
  name: string
  file: string
}
export interface Course {
  id: string
  title: string
  visible: boolean
  picture?: string
  attachments?: Attachment[]
  company: Company
  startDate: string
  endDate?: string
  duration?: string
  url?: string
  hideDescription?: boolean
  description: string
}
export interface Profile {
  id: string
  fullname: string
  picture: string
  address: string
  email: string
  web: string
  born_date: string
  nationality: string
  position: string
}
export interface Skill {
  id: string
  nativeLanguage: string[]
  languages: Language[]
  drivingLicense: string[]
  skills: string
}
export interface Language {
  name: string
  listening: string
  reading: string
  spokenInteraction: string
  spokenProduction: string
  writing: string
}
