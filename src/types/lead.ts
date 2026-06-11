export interface Lead {
leadId: string;

name: string;

mobileNumber: string;

city: string;

approxGoldWeight: string;

notes?: string;

sourcePage: string;

sourceComponent: string;

status:
| "new"
| "contacted"
| "converted";

createdAt?: any;
}
