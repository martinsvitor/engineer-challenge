enum InsuranceType {
    LIABILITY,
    HOUSEHOLD,
    HEALTH
  }
enum Status {
    ACTIVE,
    PENDING
  }
  
interface Family {
    customerId: string,
    firstName: string,
    id: string,
    lastName: string
  }
  
interface Customer {
    dateOfBirth: Date | string,
    family: Family[],
    firstName: string,
    id: string,
    lastName: string,
  }
  
export interface Search {
    customer: Customer,
    endDate: null | Date | string,
    id: string,
    insuranceType: InsuranceType,
    provider: string,
    status: Status
  }