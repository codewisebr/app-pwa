import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  // API_URL = 'https://codewisebr.com/natalia/api-rest/api/'; 
  API_URL = 'http://localhost:8000/api/';
  // API_URL = 'http://10.0.2.2:8000/api/';
  constructor() { }
}