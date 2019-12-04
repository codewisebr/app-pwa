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

  //#region USER
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
            this.global.user_id = val.token.user_id;
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

  checkpassword(id: Number, password: String)
  {
    return this.http.post(this.env.API_URL + 'auth/checkpassword',
      {id_user: id, password: password}); 
  }

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
        this.storage.remove('avental');
        this.storage.remove('cargo');
        this.storage.remove('reuniao');
        delete this.token;
        delete this.global.access;
        delete this.global.user_id;
        this.isLoggedIn=false;
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
  //#endregion
  
  //#region INFORMATIVO
  informativo(info:String, id_user:Number, nivel: Number){
    return this.http.post(this.env.API_URL + 'info/informativo', {
      info:info, id_user:id_user, nivel:nivel
    });
  }
  updateInfo(id: Number, info:String, ativo: Number, nivel: Number): Observable<any>{
    return this.http.put<any>(this.env.API_URL + 'info/updateinfo',
    {id: id, info: info, ativo: ativo, nivel:nivel});
  }
  getInfo(): Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'info/getinfo');
  }

  getAllInfo(): Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'info/getallinfo');
  }

  getNivelInfo(nivel:Number, tipo:Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+'info/getnivelinfo',{nivel:nivel, tipo:tipo});  
  }

  deleteHistInfo(){
    return this.http.get<any>( this.env.API_URL+'info/deletehistinfo');  
  }
  //#endregion

  //#region ORDEM
  ordem(ordem:String, id_user:Number, nivel: Number){
    return this.http.post(this.env.API_URL + 'ordem/ordem', {
      ordem:ordem, id_user:id_user, nivel:nivel
    });
  }
  updateOrdem(id: Number, ordem:String, ativo: Number, nivel: Number): Observable<any>{
    return this.http.put<any>(this.env.API_URL + 'ordem/updateordem',
    {id: id, ordem: ordem, ativo: ativo, nivel: nivel});
  }
  getOrdem(): Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'ordem/getordem');  
  }

  getAllOrdem(): Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'ordem/getallordem');  
  }

  getNivelOrdem(nivel:Number, tipo:Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+'ordem/getnivelordem',{nivel:nivel, tipo:tipo});  
  }

  deleteHistOrdem(){
    return this.http.get<any>( this.env.API_URL+'ordem/deletehistordem');  
  }
  //#endregion

  //#region AGAPE
  agape(agape:String, id_user:Number, date:String){
    return this.http.post(this.env.API_URL + 'agape/agape', {
      agape:agape, id_user:id_user, date:date
    });
  }
  updateagape(id: Number, agape:String, ativo:Number, date:String): Observable<any>{
    return this.http.put<any>(this.env.API_URL + 'agape/updateagape',
    {id: id, agape: agape, ativo: ativo, date:date});
  }
  getAgape(tipo:Number)
  {
    return this.http.post<any>( this.env.API_URL+'agape/getagape', {tipo:tipo});
  }

  getAllAgape()
  {
    return this.http.get<any>( this.env.API_URL+'agape/getallagape');
  }

  deleteHistAgape(){
    return this.http.get<any>( this.env.API_URL+'agape/deletehistagape');  
  }
  //#endregion

  //#region MURAL
  mural(id_user: Number, text: String){
    return this.http.post(this.env.API_URL + 'mural/mural',
      {id_users: id_user, texto: text});
  }
  getMural(){
    return this.http.get<any>( this.env.API_URL+'mural/getmural');
  }
  updatemural(id: Number, texto: String) {
    return this.http.put(this.env.API_URL + 'mural/updatemural',
    {id: id, texto: texto}
    );
  }
  deletemural(id: Number) {
    return this.http.put(this.env.API_URL + 'mural/deletemural',
    {id: id}
    );
  }
  //#endregion
  
  //#region FINANCEIRO
  financeiro(valor: String, mes: Number){
    return this.http.post(this.env.API_URL + 'financeiro/createfinanceiro', {valor:valor, mes:mes});
  }
  updatefinanceiro(id: Number, form: Number) {
    return this.http.put(this.env.API_URL + 'financeiro/updatefinanceiro',
    {id: id, form: form}
    );
  }
  getAllFinanceiro(id_user: Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+ 'financeiro/getallfinanceiro', 
    {id_user: id_user});
  }

  getFinanceiro(id_user: Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+'financeiro/getfinanceiro', 
    {id_user: id_user});
  }

  getAdminFinanceiro():Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'financeiro/getadminfinanceiro');
  }
  //#endregion

  //#region LISTA
  confirma_presenca(id_user: Number, resp: Number, motivo: String, reuniao: Number)
  {
    return this.http.post(this.env.API_URL + 'lista/listapresenca',
      {id_user: id_user, presenca: resp, motivo: motivo, reuniao:reuniao}
    );
  }
  getLista(): Observable<any>
  {
    return this.http.get<any>( this.env.API_URL+'lista/getlista');
  }

  getAllLista(id:Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+'lista/getalllista',{id:id});
  }

  getConfirmacao(tipo:Number){
    return this.http.post<any>( this.env.API_URL+'lista/getconfirmacao',{tipo:tipo});
  }
  updatelista(id: Number, motivo: String, presenca:Number) {
    return this.http.put(this.env.API_URL + 'lista/updatelista',
    {id: id, motivo:motivo, presenca: presenca});
  }

  //#endregion
  
  //#region REUNIAO
  reuniao():Observable<any>
  {
    return this.http.get<any>(this.env.API_URL+'reuniao/reuniao');
  }

  getReuniao(): Observable<any> {
    return this.http.get<any>( this.env.API_URL+'reuniao/getreuniao');
  }

  getAllReuniao(): Observable<any> {
    return this.http.get<any>( this.env.API_URL+'reuniao/getallreuniao');
  }

  familia(id_user:Number, grau:String, data:Date){
    return this.http.post(this.env.API_URL + 'auth/familia', {
      id_user:id_user, grau:grau, data:data
    });
  }
  //#endregion

  getCargos()
  {
    return this.http.get<any>( this.env.API_URL+'auth/getcargos');
  }

  getIdCargos(id:Number): Observable<any>
  {
    return this.http.post<any>( this.env.API_URL+'auth/getidcargos', {id:id});
  }

  getAvental(){
    return this.http.get<any>( this.env.API_URL+'auth/getavental');
  }

  getFamilia(id:Number){
    return this.http.post<any>( this.env.API_URL+'auth/getfamilia', 
      {id_user: id});
  }

  forgotpassword(email: String)
  {
    return this.http.post(this.env.API_URL + 'email/forgotpassword',
      {email: email}); 
  }
}