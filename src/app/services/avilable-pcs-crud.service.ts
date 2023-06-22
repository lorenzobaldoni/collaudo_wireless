import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvailablePcsService {
  private url : string

  constructor(private http : HttpClient) {
    this.url = 'http://localhost:4300/api/'
  }

  getAvailablePcs() {
    return this.http.get(`${this.url}${"get_available_pcs"}`)
  }

  addAvailablePcs(risorsa: {}) {
    return this.http.put(`${this.url}add_available_pc`, risorsa)
  }

  getAvailablePc(id : number) {
    return this.http.get(`${this.url}get_available_pc/${id}`)
  }

  deleteAvailablePcs(id : number) {
    return this.http.delete(`${this.url}del_available_pc/${id}`)
  }

  editAvailablePcs(id: number, availablePcNew: {}) {
    return this.http.put(`${this.url}edit_available_pc/${id}`, availablePcNew);
  }

}