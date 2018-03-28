declare interface ContactUploaderConfig {
    host: string
    username: string
    password: string
    secure: boolean
}

type RawPersonnelRecord = string[];

type PersonnelData = {
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

type WPPersonnelRecord = {

}