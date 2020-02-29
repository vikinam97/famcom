import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

const apiUrl = 'http://localhost:9000/v1/user'
const stateUrl = 'http://localhost:9000/states'
@Injectable({
    providedIn: 'root',
})

export class UserService {
   

    constructor(private http: HttpClient) { }

    post(data) {
        return <any>this.http.post(apiUrl, data , { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
    }

    getStates() {
        return <any>this.http.get(stateUrl,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
    }

    getCities(id) {
        return <any>this.http.get(stateUrl + '/' + id,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
    }

    // getCurrentUser() {
    //     return <any>this.http.get(AppConstants.baseURL + AppConstants.USER + '/me')
    // } 
}