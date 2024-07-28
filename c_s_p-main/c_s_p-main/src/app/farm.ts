export interface MedicineDetails {
    pest_name:string;
    pesticide:string;
    how_to_use:string;
    quantity:string;
    precautions:string;
    when_will_use:string;
  }
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
export interface Read {
      Result: [];
  }
  export interface signup {
    first_name:string;
    last_name:string;
    ph_num:number;
    email:string;
    password:string;
    c_password:string;
    location:string;
    
  }

  export interface signin {
    
    email:string;
    password:string;
    
  }


  export interface maizedetails {
    pest_name:string;
    pesticide:string;
    how_to_use:string;
    quantity:string;
    precautions:string;
    when_will_use:string;
  }


