declare interface ContactUploaderConfig {
    host: string,
    username: string,
    password: string,
    secure: boolean,
}

declare interface HandlerConfig {
    uploaderConfig: ContactUploaderConfig
    type: string
    searchQuery: (record: AbstractRecord) => string
    filename: string
}

type HandlerConstructor = (config: ContactUploaderConfig) => void;

declare interface AbstractRecord {
    title: string,
    status: 'publish' | 'draft',
    fields: any,
    existingData: any    
}

type RawPersonnelRecord = string[];

declare interface PersonnelData {
    address:    string,
    name:       string,
    telephone:  string,
    fax:        string,
    email:      string,
    job_title:  string,
}

declare interface PersonnelRecord {
    title: string,
    status: 'publish' | 'draft',
    fields: PersonnelData,
    existingData: any
}


declare interface OfficePersonnel {
    office: string[],
    personnel: RawPersonnelRecord[],
}

type WPPersonnelRecord = any;
type WPOfficeRecord = any;

declare interface WPAuth {
    token: string,
    user_display_name: string,
    user_email: string,
    user_nicename: string,
}

declare interface OfficeData {
    address: string,
    fax: string,
    name: string,
    telephone: string,
}

declare interface OfficeContact {
    existingData: any,
    fields: OfficeData,
    status: "publish" | "draft",
    title: string
}

declare interface SchoolData {
    long_name: string,
    short_name: string,
    address: string,
    fax: string,
    telephone: string,
    admin_staff: any
}

declare interface SchoolContact {
    existingData: any,
    fields: SchoolData,
    status: "publish" | "draft",
    title: string,
}