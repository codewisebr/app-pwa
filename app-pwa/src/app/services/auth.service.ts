import { User } from 'src/app/model/user.model';
import { GlobalService } from './global.service';
import { AlertService } from 'src/app/services/alert.service';
import { HttpClient, HttpHeaders,HttpHandler } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { tap, catchError,retry } from 'rxjs/operators';
import { EnvService } from './env.service';
import { Response } from 'selenium-webdriver/http';
import { Observable, of, throwError, Observer } from 'rxjs';
import { StringifyOptions } from 'querystring';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*pipe e tab são funções independentes do metodo Observable
  -pipe cria uma cadeia de operadores
  -tab executa os efeitos colaterais 
  */

  //variaveis
  isLoggedIn = false;
  public auxtoken:any;
  public token:any;
  public id:any;
  public date:any;
  public endereco:any;
  public cidade:any;
  public estado:any;
  auxid: any;
  public aux: any;

  /* CRUD - creat, read, update, delete. Carregam valores armazenados */

  constructor(
    private http: HttpClient,
    private env: EnvService, 
    private alertctrl : AlertService, 
    private storage : Storage,
    private global : GlobalService
  )
  {  
  }

  //#region POST
  login(email: String, password: String) {
    return this.http.post(this.env.API_URL + 'auth/login', 
      {email: email, password: password}
    ).pipe(
      tap(access_token => {
        this.storage.set('token', access_token).then(
          (val) => {
            console.log('Token armazenado');
            this.auxtoken = val.accessToken;
            this.storage.set('access', this.auxtoken);
            this.global.access = val.accessToken;
          },
          error => console.error('Erro ao armazenar o Token', error)
        );
        this.token = access_token;
        this.isLoggedIn = true;
        return this.token;
      })
    );
  }

  register(fName: String, lName: String, email: String, password: String,data_nasc: Date, 
    cargo_id: Number, avental_id:Number, telefone: Number, 
    endereco: String, cidade: String, estado: String, nivel: Number, profissao:String) {
    return this.http.post(this.env.API_URL + 'auth/register',
    {
      fName: fName, lName: lName, 
      email: email, password: password, 
      endereco: endereco, cidade: cidade, 
      estado: estado, data_nasc: data_nasc, 
      cargo_id: cargo_id, avental_id:avental_id, telefone:telefone,
      nivel: nivel, profissao:profissao
    });
  }

  informativo(info:String, id_user:Number, nivel: Number){
    return this.http.post(this.env.API_URL + 'auth/informativo', {
      info:info, id_user:id_user, nivel:nivel
    });
  }

  ordem(ordem:String, id_user:Number, nivel: Number){
    return this.http.post(this.env.API_URL + 'auth/ordem', {
      ordem:ordem, id_user:id_user, nivel:nivel
    });
  }

  agape(agape:String, id_user:Number, date:String){
    return this.http.post(this.env.API_URL + 'auth/agape', {
      agape:agape, id_user:id_user, date:date
    });
  }

  confirma_presenca(id_user: Number, resp: Number, motivo: String, reuniao: Number)
  {
    return this.http.post(this.env.API_URL + 'auth/listapresenca',
      {id_user: id_user, presenca: resp, motivo: motivo, reuniao:reuniao}
    );
  }

  checkpassword(id: Number, password: String)
  {
    return this.http.post(this.env.API_URL + 'auth/checkpassword',
      {id_user: id, password: password}); 
  }

  mural(id_user: Number, text: String){
    return this.http.post(this.env.API_URL + 'auth/mural',
      {id_users: id_user, texto: text});
  }

  financeiro(valor: String, mes: Number){
    return this.http.post(this.env.API_URL + 'auth/financeiro', {valor:valor, mes:mes});
  }

  familia(id_user:Number, grau:String, data:Date){
    return this.http.post(this.env.API_URL + 'auth/familia', {
      id_user:id_user, grau:grau, data:data
    });
  }
  //#endregion
  
  //#region PUTS
  updateuser(
    id: Number,fName: String, lName: String, email: String, 
    endereco: String, cidade: String, estado: String, 
    data_nasc: String, telefone: Number, nivel:Number, cargo:Number, profissao: String) {
    return this.http.put(this.env.API_URL + 'auth/updateuser',
      {
        id_user: id, fName: fName, lName: lName, email: email, 
        endereco: endereco, cidade: cidade, estado: estado,
        data_nasc: data_nasc, telefone: telefone, nivel:nivel, cargo:cargo, profissao:profissao}
    );
  }

  updatepassword(id: Number, password: String) {
    return this.http.put(this.env.API_URL + 'auth/updatepassword',
    {id_user: id, password: password}
    );
  }

  updateinfo(id: Number, info:String, ativo: Number, nivel: Number): Observable<any>{
    return this.http.put<any>(this.env.API_URL + 'auth/updateinfo',
    {id: id, info: info, ativo: ativo, nivel:nivel});
  }

  updateordem(id: Number, ordem:String, ativo: Number, nivel: Number): Observable<any>{
    return this.http.put<any>(this.env.API_URL + 'auth/updateordem',
    {id: id, ordem: ordem, ativo: ativo, nivel: nivel});
  }

  updateagape(id: Number, agape:String, ativo:Number, date:String): Observable<any>{
    return this.http.put<any>(this.env.API_URL + 'auth/updateagape',
    {id: id, agape: agape, ativo: ativo, date:date});
  }

  updatelista(id: Number, motivo: String, presenca:Number) {
    return this.http.put(this.env.API_URL + 'auth/updatelista',
    {id: id, motivo:motivo, presenca: presenca});
  }

  updatemural(id: Number, texto: String) {
    return this.http.put(this.env.API_URL + 'auth/updatemural',
    {id: id, texto: texto}
    );
  }
  
  updatefinanceiro(id: Number, form: Number) {
    return this.http.put(this.env.API_URL + 'auth/updatefinanceiro',
    {id: id, form: form}
    );
  }

  deletemural(id: Number) {
    return this.http.put(this.env.API_URL + 'auth/deletemural',
    {id: id}
    );
  }

  //#endregion

  //#region GET

  reuniao():Observable<any>
  {
    return this.http.get<any>(this.env.API_URL+'auth/reuniao');
  }

  logout() {
    const headers = new HttpHeaders({
      'Authorization': "Bearer "+this.global.access
      });
    return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    .pipe(
      tap(data => {
        this.isLoggedIn = false;
        this.storage.remove('access');
        this.storage.remove('token');
        this.storage.remove('user_id');
        this.storage.remove('avental');
        this.storage.remove('cargo');
        delete this.token;
        delete this.global.access;
        return data;
      })
    )
  }

  user() {
    const headers = new HttpHeaders({
    'Authorization': "Bearer "+this.global.access
    });
    return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers });
  }

  getUsers(id: Number){
    return this.http.post(this.env.API_URL + 'auth/getusers',
    {id_user:id}
    ); 
  }

  getUsersbyemail(email: String){
    return this.http.post(this.env.API_URL + 'auth/getbyemail',
    {email:email}
    ); 
  }
  
  getUserCargo(id:Number){
    return this.http.post(this.env.API_URL + 'auth/getusercargo',
    {id:id}
    ); 
  }
  getAllUser(): Observable<any>{
    return this.http.get(this.env.API_URL + 'auth/getalluser');
  }

  getNome(id: Number){
    return this.http.post(this.env.API_URL + 'auth/getnome',
    {id_user:id}
    ); 
  }

  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;
        this.storage.set('user_id', data.token.user_id);
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;  
      }
    );
  }

  getReuniao(): Observable<any> {
    return this.http.get<any>( this.env.API_URL+'auth/getreuniao');
  }

  getAllReuniao(): Observable<any> {
    return this.http.get<any>( this.env.API_URL+'auth/getallreuniao');
  }

  getLista(): Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'auth/getlista');
  }

  getAllLista(id:Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+'auth/getalllista',{id:id});
  }

  getConfirmacao(tipo:Number){
    return this.http.post<any>( this.env.API_URL+'auth/getconfirmacao',{tipo:tipo});
  }
  
  getInfo(): Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'auth/getinfo');
  }

  getAllInfo(): Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'auth/getallinfo');
  }

  getNivelInfo(nivel:Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+'auth/getnivelinfo',{nivel:nivel});  
  }

  getOrdem(): Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'auth/getordem');  
  }

  getAllOrdem(): Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'auth/getordem');  
  }

  getNivelOrdem(nivel:Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+'auth/getnivelordem',{nivel:nivel});  
  }

  getCargos()
  {
    return this.http.get<any>( this.env.API_URL+'auth/getcargos');
  }

  getIdCargos(id:Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+'auth/getidcargos', {id:id});
  }

  getAgape()
  {
    return this.http.get<any>( this.env.API_URL+'auth/getagape');
  }

  getAllAgape()
  {
    return this.http.get<any>( this.env.API_URL+'auth/getallagape');
  }

  getAvental(){
    return this.http.get<any>( this.env.API_URL+'auth/getavental');
  }

  getAllFinanceiro(id_user: Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+'auth/getallfinanceiro', 
    {id_user: id_user});
  }

  getFinanceiro(id_user: Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+'auth/getfinanceiro', 
    {id_user: id_user});
  }

  getAdminFinanceiro():Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'auth/getadminfinanceiro');
  }

  getMural(){
    return this.http.get<any>( this.env.API_URL+'auth/getmural');
  }

  getFamilia(id:Number){
    return this.http.post<any>( this.env.API_URL+'auth/getfamilia', 
      {id_user: id});
  }
  //#endregion
}