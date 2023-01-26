interface NetlifyCMSContent {
    companies: Company[];
    experiences: Experience[];
    courses: Course[];
    profile: Profile;
    skill: Skill;
}
interface Company {
    id: string;
    name: string;
    picture?: string;
    url?: string;
    address?: string;
}
interface Experience {
    id: string;
    title: string;
    visible: boolean;
    picture?: string;
    company: Company;
    startDate: string;
    endDate?: string;
    url?: string;
    tags?: string[];
    description: string;
}
interface Attachment {
    name: string;
    file: string;
}
interface Course {
    id: string;
    title: string;
    visible: boolean;
    picture?: string;
    attachments?: Attachment[];
    company: Company;
    startDate: string;
    endDate?: string;
    duration?: string;
    url?: string;
    description: string;
}
interface Profile {
    id: string;
    fullname: string;
    picture: string;
    address: string;
    email: string;
    web: string;
    born_date: string;
    nationality: string;
    position: string;
}
interface Skill {
    id: string;
    nativeLanguage: string[];
    languages: Language[];
    drivingLicense: string[];
    skills: string;
}
interface Language {
    name: string;
    listening: string;
    reading: string;
    spokenInteraction: string;
    spokenProduction: string;
    writing: string;
}
