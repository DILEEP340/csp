import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {
  InsertedSuccess,
  signup,
  maizedetails,
  Read,
  MedicineDetails,
  UniqueConstraintError,
} from './farm';




import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})




export class FarmService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private urc='http://localhost:3000/'
  private url = 'http://localhost:4000/';

  private urr = 'http://localhost:5000/';


  Insert(
    Details: MedicineDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'pests/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(pest_name: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}pests/Read${pest_name}`);
  }
  Delete(pest_name: string): Observable<InsertedSuccess> {
    console.log(`${this.url}pests/Delete${pest_name}`);
    return this.http.delete<InsertedSuccess>(`${this.url}pests/Delete${pest_name}`
    );
  }
  Update(pest_name: string, Details: MedicineDetails) {
    return this.http.put(`${this.url}pests/Update${pest_name}`, Details, {
      headers: this.headers,
    });
  }
  view():Observable<Read>{
    return this.http.get<Read>(`${this.url}pests/ReadAll`);
  }


   


  Insert1(
    Details: signup
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.urc + 'register/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read1(email: string): Observable<Read> {
    return this.http.get<Read>(`${this.urc}register/Read${email}`);
  }
  Delete1(email: string): Observable<InsertedSuccess> {
    console.log(`${this.urc}register/Delete${email}`);
    return this.http.delete<InsertedSuccess>(`${this.urc}register/Delete${email}`
    );
  }
  Update1(email: string, Details: signup) {
    return this.http.put(`${this.urc}register/Update${email}`, Details, {
      headers: this.headers,
    });
  }
  view1():Observable<Read>{
    return this.http.get<Read>(`${this.urc}register/ReadAll`);
  }


  view2(email:string):Observable<Read>{
    return this.http.get<Read>(`${this.urc}register/View${email}`);
  }




Insert2(
  Details: maizedetails
): Observable<InsertedSuccess | UniqueConstraintError> {
  return this.http.post<InsertedSuccess | UniqueConstraintError>(
    this.urr + 'maize/Insert',
    Details,
    { headers: this.headers }
  );
}
Read2(pest_name: string): Observable<Read> {
  return this.http.get<Read>(`${this.urr}maize/Read${pest_name}`);
}
Delete2(pest_name: string): Observable<InsertedSuccess> {
  console.log(`${this.urr}maize/Delete${pest_name}`);
  return this.http.delete<InsertedSuccess>(`${this.urr}maize/Delete${pest_name}`
  );
}
Update2(pest_name: string, Details: maizedetails) {
  return this.http.put(`${this.urr}maize/Update${pest_name}`, Details, {
    headers: this.headers,
  });
}
view3():Observable<Read>{
  return this.http.get<Read>(`${this.urr}maize/ReadAll`);
}




read():Observable<Read>{
  return this.http.get<Read>(`${this.url}pests/ReadAll`);
}
Delete3(pest_name: string): Observable<InsertedSuccess> {
  console.log(`${this.url}pests/Delete${pest_name}`);
  return this.http.delete<InsertedSuccess>(
    `${this.url}pests/Delete${pest_name}`
  );
}
read3(pest_name: number): Observable<Read> {
  return this.http.get<Read>(`${this.url}pests/Read${pest_name}`);
}
}