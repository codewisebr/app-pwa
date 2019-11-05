<?php
namespace App\Http\Controllers\Auth;

use App\Agape;
use App\Avental;
use App\Cargos;
use App\Familia;
use App\User;
use App\ListaPresenca;
use App\Reuniao;
use App\Ordem;
use App\Financeiro;
use App\Mural;
use App\Info;
use Hash;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mockery\HigherOrderMessage;

class AuthController extends Controller
{
    public function register(Request $request){
        //função de validacao de dados
        $request->validate([
            'fName' => 'required|string',
            'lName' => 'required|string',
            'endereco' => 'required|string',
            'cidade' => 'required|string',
            'estado' => 'required|string',
            'data_nasc' => 'required|date',
            'email' => 'required|string|email|unique:users',
            'cargo_id'  => 'required|integer',
            'avental_id'  => 'required|integer',
            'telefone' => 'required|string',
            'nivel' => 'required|int',
            'password' => 'required|string',
            'profissao'=> 'required|string'
        ]);
        
        //novo user
        $user = new User;
        //insere os dados
        $user->first_name = $request->fName;
        $user->last_name = $request->lName;
        $user->endereco = $request->endereco;
        $user->cidade = $request->cidade;
        $user->estado = $request->estado;
        $user->data_nasc = $request->data_nasc;
        $user->telefone = $request->telefone;
        $user->email = $request->email;
        $user->cargo_id = $request->cargo_id;
        $user->avental_id = $request->avental_id;
        $user->nivel = $request->nivel;
        $user->profissao = $request->profissao;
        $user->password = bcrypt($request->password);
        //salva o user
        $user->save();
        $info = User::where('email', $request->email)->value('id');
        return response()->json($info);
    }

    public function listapresenca(Request $request){
        $request->validate([
            'id_user' => 'required|int',
            'presenca' => 'required|int',
            'motivo' => 'string',
            'reuniao'=>'required|int'
        ]);
        $lista = ListaPresenca::where(['id_user'=> $request->id_user, 'reuniao'=> $request->reuniao])->first();
        if($lista != null){
            ListaPresenca::where(['id_user'=> $request->id_user, 'reuniao'=> $request->reuniao])->update(['presenca'=> $request->presenca, 'motivo'=>$request->motivo]);
            return response()->json([
                'message' => 'Lista Atualizada!'
            ], 201);
        }
        else
        {
            $presenca = new ListaPresenca;
            $presenca -> id_user = $request->id_user;
            $presenca -> presenca = $request->presenca;
            $presenca -> motivo = $request->motivo;
            $presenca -> reuniao = $request->reuniao;
            $presenca->save();
        
            return response()->json([
                'message' => 'Novo usuário inserido na lista!'
            ], 201);
        }
    }

    public function ordem(Request $request){
        $request->validate([
            'ordem' => 'required|string',
            'id_user' => 'required|int',
            'nivel' => 'required|int'
        ]);

        $ordem = new Ordem;
        $ordem  -> id_user = $request->id_user;
        $ordem  -> ordem = $request->ordem;
        $ordem  -> nivel = $request->nivel;
        $ordem  -> ativo = 1;
        $ordem ->save();
    
        return response()->json($ordem-> id);
    }

    public function informativo(Request $request){
        $request->validate([
            'info' => 'required|string',
            'nivel' => 'required|int',
            'id_user' => 'required|int'
        ]);
        
        $info = new Info;
        $info  -> id_user = $request->id_user;
        $info  -> info = $request->info;
        $info  -> ativo = 1;
        $info  -> nivel = $request->nivel;
        $info ->save();
    
        return response()->json($info -> id);
        
    }

    public function agape(Request $request){
        $request->validate([
            'date' => 'required|string',
            'id_user' => 'required|int',
            'agape'=> 'required|string'
        ]);
        $agape = new Agape;
        $aux = $request->date;
        $data = strtotime($aux);
        $agape -> data = date('Y-m-d', $data);
        $agape -> id_user = $request->id_user;
        $agape -> agape = $request->agape;
        $agape -> ativo = 1;
        $agape->save();
        return response()->json($agape -> id);
    }

    public function createreuniao($day){
        Carbon::setLocale('pt_BR');
        //pega a data atual
        $now =Carbon::now();
        //transforma em data
        $now = strtotime($now);
        $string = "+".$day." day";
        //soma a qtde de dias
        $data = strtotime($string, $now);
        //configura o formato
        $resul = date('Y-m-d', $data);
        //desativa reuniao antiga toda terça
        if($day == 6)
        {
            //pega a data do dia anterior
            $aux = strtotime("-1 day", $now);
            $antiga= date('Y-m-d', $aux);
            Reuniao::where('data',$antiga)->update(['ativo'=> 0]);
        }
        
        //verifica se ja tem uma reuniao nesse dia
        $verifica = Reuniao::where('data', $resul)->first();
        //se nao tiver
        if($verifica == null)
        {
            $reuniao = new Reuniao;
            $reuniao->data = $resul;
            $reuniao->ativo=1;
            $reuniao->save();
            return response()->json([
                'message' => 'Reuniao criada!'
            ], 201);
        }
        else{
            return response()->json([
                'message' => 'Reuniao já marcada!'
            ], 201);
        }
        
    }

    public function reuniao(){
        //pega o dia da semana
        $atual = date('w');
        switch($atual){
            case 1: //segunda
                return $this->createreuniao(0);
                break;
            case 2:
                return $this->createreuniao(6);
                break;
            case 3:
                return $this->createreuniao(5);
                break;
            case 4:
                return $this->createreuniao(4);
                break;
            case 5:
                return $this->createreuniao(3);
                break;
            case 6:
                return $this->createreuniao(2);
                break;
            case 0: //domingo
                return $this->createreuniao(1);
                break;
        }
        
    }

    public function login(Request $request) {
        /*para o login é preciso criar o token, precisa fazer:
        php artisan passport:install que ele dará um token e add no banco sozinho
        */
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me'=> 'boolean'
        ]);
        ///*
        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials))
            return response()->json([
            'message' => 'Login não autorizado! Verifique se a senha ou o email estão corretos'
        ], 401);
        $user= Auth::user();
        $tokenResult = $user->createToken('Token de acesso pessoal');
        return response()->json($tokenResult);
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'id'=>$user->id,
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }
    
    public function logout(Request $request){
        $request->user()->token()->revoke();
        if($request == null)
            return response()->json([
                'message' => 'Logout falhou!'
            ]);
        else
            return response()->json([
            'message' => 'Logout feito com sucesso!'
            ]);
    }
    //validacao
    public function checkpassword(Request $request){
        $request->validate([
            'id_user'=> 'required|int',
            'password' => 'required|string'
        ]);
        $password = User::where('id', $request->id_user)->value('password');
        if(Hash::check($request->password, $password, []))
            return response()->json('Senha correta!');
        else
            return response()->json('Senha incorreta!');
    }

    public function mural(Request $request){
        $request->validate([
            'id_users'=>'required|int',
            'texto' => 'required|string'
        ]);
        $mural = new Mural;
        $mural -> id_users = $request->id_users;
        $mural -> texto = $request->texto;
        $mural -> save();
        return response()->json($mural -> id);
    }

    public function financeiro(Request $request){
        $request->validate([
            'valor'=>'required|string',
            'mes' => 'required|int'
        ]);
        switch($request->mes){
            case 1:
                $mes = "Janeiro";
                break;
            case 2:
                $mes = "Fevereiro";
                break;
            case 3:
                $mes = "Março";
                break;
            case 4:
                $mes = "Abril";
                break;
            case 5:
                $mes = "Maio";
                break;
            case 6:
                $mes = "Junho";
                break;
            case 7:
                $mes = "Julho";
                break;
            case 8:
                $mes = "Agosto";
                break;
            case 9:
                $mes = "Setembro";
                break;
            case 10:
                $mes = "Outubro";
                break;
            case 11:
                $mes = "Novembro";
                break;
            case 12:
                $mes = "Dezembro";
                break;
        }
        $usuarios = User::pluck('id');
        foreach($usuarios as $user ){
            $financeiro = new Financeiro;
            $financeiro-> id_user = $user;
            $financeiro -> data_pag = null;
            $financeiro-> mes = $mes;
            $financeiro-> valor = $request->valor;
            $financeiro ->save();
        }
        $show = Financeiro::all();
        return response()->json($show);
    }

    public function familia(Request $request){
        $request->validate([
            'id_user'=>'required|int',
            'grau' => 'required|string',
            'data'=>'required|date'
        ]);
        $familia = new Familia;
        $familia ->id_users = $request->id_user;
        $familia ->data_nasc = $request->data;
        $familia ->grau = $request->grau;
        $familia ->save();
        return response()->json($familia);
    }

    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */

     //UPDATES
    public function updateuser(Request $request){
        $request->validate([
            'id_user'=> 'required|int',
            'fName' => 'required|string',
            'lName' => 'required|string',
            'email' => 'required|string|email',
            'endereco' => 'required|string',
            'cidade' => 'required|string',
            'estado' => 'required|string',
            'data_nasc' => 'required|date',
            'telefone' => 'required|string',
            'nivel' => 'required|int',
            'cargo' => 'required|int',
            'profissao' => 'required|string'
        ]);
        $resposta = User::where('id', $request->id_user)->update([
            'first_name'=> $request->fName, 'last_name'=> $request->lName, 'email'=>$request->email,
            'endereco' => $request->endereco, 'cidade'=> $request->cidade, 'estado'=>$request->estado,
            'data_nasc'=>$request->data_nasc, 'telefone'=>$request->telefone, 'nivel'=>$request->nivel,
            'cargo_id'=>$request->cargo, 'profissao'=>$request->profissao
        ]);
        if($resposta == null)
            return response()->json(['message' => 'Erro!'], 201);
        else
            return response()->json(['message' => 'Usuário Atualizado!'], 201);

    }

    public function updatepassword(Request $request){
        $request->validate([
            'id_user'=> 'required|int',
            'password' => 'required|string'
        ]);
        $password = bcrypt($request->password);
        $resposta = User::where('id', $request->id_user)->update(['password'=> $password]);
        if($resposta == null)
            return response()->json(['message' => 'Erro!'], 201);
        else
            return response()->json(['message' => 'Senha Atualizada!'], 201);
    }

    public function updateinfo(Request $request){
        $request->validate([
            'id'=>'required|int',
            'info'=>'required|string',
            'ativo'=>'required|int'
        ]);
        $resposta = Info::where('id', $request->id)->update(['info'=>$request->info, 'ativo'=>$request->ativo]);
        if($resposta == null)
            return response()->json(['message' => 'Erro!'], 201);
        else
            return response()->json(['message' => 'Informativo Atualizado!'], 201);
    }

    public function updateordem(Request $request){
        $request->validate([
            'id'=>'required|int',
            'ordem'=>'required|string',
            'ativo'=>'required|int'
        ]);
        $resposta = Ordem::where('id', $request->id)->update(['ordem'=>$request->ordem, 'ativo'=>$request->ativo]);
        if($resposta == null)
            return response()->json(['message' => 'Erro!'], 201);
        else
            return response()->json(['message' => 'Ordem Atualizada!'], 201);
    }

    public function updateagape(Request $request){
        $request->validate([
            'id'=>'required|int',
            'agape'=>'required|string',
            'ativo'=>'required|int',
            'date'=>'required|string'
        ]);
        $data = strtotime($request->date);
        $resul= date('Y-m-d', $data);
        $resposta = Agape::where('id', $request->id)->update(['agape'=>$request->agape, 'ativo'=>$request->ativo, 'data'=>$resul]);
        if($resposta == null)
            return response()->json(['message' => 'Erro!'], 201);
        else
            return response()->json(['message' => 'Ágape Atualizada!'], 201);
    }

    public function updatelista(Request $request){
        $request->validate([
            'id'=>'required|int',
            'motivo'=>'required|string',
            'presenca'=>'required|int'
        ]);
        $reuniaoInfo=Reuniao::where('ativo', '1')->value('id'); 
        $listaInfo = ListaPresenca::where(['reuniao'=> $reuniaoInfo, 'id'=>$request->id])
                                    ->update(['motivo'=>$request->motivo, 'presenca'=>$request->presenca]);
        if($listaInfo == null){
            return response()->json(['message' => 'Erro!'], 201);
        }
        else
            return response()->json(['message' => 'Lista Atualizada!'], 201);
    }

    public function updatemural(Request $request){
        $request->validate([
            'id'=>'required|int',
            'texto'=>'required|string'
        ]);
        $resposta = Mural::where('id', $request->id)->update(['texto'=> $request->texto]);
        if($resposta == null)
            return response()->json(['message' => 'Erro!'], 201);
        else
            return response()->json(['message' => 'Mural Atualizado!'], 201);
    }

    public function updatefinanceiro(Request $request){
        $request->validate([
            'id'=>'required|int',
            'form'=>'required|int'
        ]);
        if($request->form == 0)
            $resposta = Financeiro::where('id', $request->id)->update(['data_pag'=> null]);
        else if($request->form == 1){
            $atual = date('Y-m-d');
            $resposta = Financeiro::where('id', $request->id)->update(['data_pag'=> $atual]);
        }
        if($resposta == null)
            return response()->json(['message' => 'Erro!'], 201);
        else
            return response()->json(['message' => 'Financeiro Atualizado!'], 201);
    }

    //DELETES
    public function deletemural(Request $request){
        $request->validate([
            'id'=>'required|int'
        ]);
        Mural::where('id', $request->id)->delete();
        return response()->json(['message' => 'Mural Excluido!'], 201);
    }

    //GETS
    public function user(Request $request){
        return response()->json($request->user());
    }

    public function getusers(Request $request){
        $request->validate([
            'id_user'=>'required|int'
        ]);
        $resp = User::where('id', $request->id_user)->get();
        return response()->json($resp);
    }

    public function getbyemail(Request $request){
        $request->validate([
            'email'=>'required|string'
        ]);
        $resp = User::where('email', $request->email)->value('id');
        return response()->json($resp);
    }

    public function getusercargo(Request $request){
        $request->validate([
            'id'=>'required|int'
        ]);
        $resp = User::where('id', $request->id)->value('cargo_id');
        return response()->json($resp);
    }

    public function getalluser(){
        $info = User::select('id', 'profissao', 'telefone')->get();
        return response()->json($info);
    }

    public function getnome(Request $request){
        $request->validate([
            'id_user'=>'required|int'
        ]);
        $first = User::where('id', $request->id_user)->value('first_name');
        $last = User::where('id', $request->id_user)->value('last_name');
        $nome = $first." ".$last;
        return response()->json([$nome, $request->id_user]);
    }

    public function getlista(){
        $reuniaoInfo=Reuniao::where('ativo', '1')->value('id'); 
        $listaInfo = ListaPresenca::where('reuniao', $reuniaoInfo)->get();
        if($listaInfo != null)
            return response()->json($listaInfo);
        else
            return response()->json(" ");
    }

    public function getalllista(Request $request){
        $request->validate([
            'id'=>'required|int'
        ]);
        $listaInfo = ListaPresenca::where('reuniao', $request->id)->get();
        if($listaInfo != null)
            return response()->json($listaInfo);
        else
            return response()->json(" ");
    }

    public function getconfirmacao(){
        $reuniaoInfo=Reuniao::where('ativo', '1')->value('id'); 
        $presente = ListaPresenca::where('reuniao', $reuniaoInfo)->count();
        if($presente != null)
            return response()->json($presente);
        else
            return response()->json(0);
    }

    public function getpresente(){
        $reuniaoInfo=Reuniao::where('ativo', '1')->value('id'); 
        $presente = ListaPresenca::where(['reuniao'=> $reuniaoInfo, 'presenca'=>1])->count();
        if($presente != null)
            return response()->json($presente);
        else
            return response()->json(0);
    }

    public function getausente(){
        $reuniaoInfo=Reuniao::where('ativo', '1')->value('id'); 
        $ausente = ListaPresenca::where(['reuniao'=> $reuniaoInfo, 'presenca'=>0])->count();
        if($ausente != null)
            return response()->json($ausente);
        else
            return response()->json(0);
    }

    public function getreuniao(){
        //recebe do bd o valor 
        $reuniaoInfo=Reuniao::where('ativo', '1')->get();
        
        return response()->json($reuniaoInfo);
    }

    public function getallreuniao(){
        //recebe do bd o valor 
        $reuniaoInfo=Reuniao::where('ativo', '0')->get();
        
        return response()->json($reuniaoInfo);
    }
    
    public function getinfo(){
        //recebe do bd o valor 
        $infoInfo=Info::where('ativo', '1')->get();
        
        return response()->json($infoInfo);
    }

    public function getallinfo(){
        //recebe do bd o valor 
        $infoInfo=Info::get();
        
        return response()->json($infoInfo);
    }

    public function getnivelinfo(Request $request){
        $request->validate([
            'nivel'=>'required|int'
        ]);
        if($request->nivel == 1)
        {
            $Info=Info::where(['nivel'=> 1, 'ativo'=>1])->get();
            return response()->json($Info);
        }
        else if($request->nivel == 2){
            $Info=Info::where([['ativo',1],['nivel','<=',2]])->get();
            return response()->json($Info);
        }
        else if($request->nivel == 3){
            $Info=Info::where('ativo',1)->get();
            return response()->json($Info);
        }
        
    }

    public function getordem(){
        $ordemInfo=Ordem::where('ativo', '1')->get();
        return response()->json($ordemInfo);
    }

    public function getallordem(){
        $ordemInfo=Ordem::get();
        return response()->json($ordemInfo);
    }

    public function getnivelordem(Request $request){
        $request->validate([
            'nivel'=>'required|int'
        ]);
        if($request->nivel == 1)
        {
            $ordemInfo=Ordem::where(['nivel'=> 1, 'ativo'=>1])->get();
            return response()->json($ordemInfo);
        }
        else if($request->nivel == 2){
            $ordemInfo=Ordem::where([['ativo',1],['nivel','<=',2]])->get();
            return response()->json($ordemInfo);
        }
        else if($request->nivel == 3){
            $ordemInfo=Ordem::where('ativo',1)->get();
            return response()->json($ordemInfo);
        }
        
    }

    public function getcargos(){
        $cargoInfo=Cargos::get();
        return response()->json($cargoInfo);
    }

    public function getidcargos(Request $request){
        $request->validate([
            'id'=>'required|int'
        ]);
        $cargoInfo=Cargos::where('id', $request->id)->value('cargo');
        return response()->json($cargoInfo);
    }

    public function getagape(){
        $info=Agape::where('ativo', '1')->get();
        
        return response()->json($info);
    }

    public function getallagape(){
        $info=Agape::get();
        
        return response()->json($info);
    }

    public function getavental(){
        $info=Avental::get();
        
        return response()->json($info);
    }

    public function getfinanceiro(Request $request){
        $request->validate([
            'id_user'=>'required|int'
        ]);
        $atual = date('m');
        switch($atual){
            case 1:
                $mes = "Janeiro";
                break;
            case 2:
                $mes = "Fevereiro";
                break;
            case 3:
                $mes = "Março";
                break;
            case 4:
                $mes = "Abril";
                break;
            case 5:
                $mes = "Maio";
                break;
            case 6:
                $mes = "Junho";
                break;
            case 7:
                $mes = "Julho";
                break;
            case 8:
                $mes = "Agosto";
                break;
            case 9:
                $mes = "Setembro";
                break;
            case 10:
                $mes = "Outubro";
                break;
            case 11:
                $mes = "Novembro";
                break;
            case 12:
                $mes = "Dezembro";
                break;
        }
        $Info=Financeiro::where(['id_user'=>$request->id_user, 'mes'=>$mes])->get();
        return response()->json($Info);
    }

    public function getallfinanceiro(Request $request){
        $request->validate([
            'id_user'=>'required|int'
        ]);
        $Info=Financeiro::where('id_user',$request->id_user)->OrderBy('data_pag', 'asc')->get();
        return response()->json($Info);
    }

    public function getadminfinanceiro(){
        $atual = date('m');
        switch($atual){
            case 1:
                $mes = "Janeiro";
                break;
            case 2:
                $mes = "Fevereiro";
                break;
            case 3:
                $mes = "Março";
                break;
            case 4:
                $mes = "Abril";
                break;
            case 5:
                $mes = "Maio";
                break;
            case 6:
                $mes = "Junho";
                break;
            case 7:
                $mes = "Julho";
                break;
            case 8:
                $mes = "Agosto";
                break;
            case 9:
                $mes = "Setembro";
                break;
            case 10:
                $mes = "Outubro";
                break;
            case 11:
                $mes = "Novembro";
                break;
            case 12:
                $mes = "Dezembro";
                break;
        }
        $info=Financeiro::where('mes', $mes )->get();
        
        return response()->json($info);
    }

    public function getmural(){
        $info=Mural::get();
        
        return response()->json($info);
    }

    public function getfamilia(Request $request){
        $request->validate([
            'id_user'=>'required|int'
        ]);
        $info = Familia::where('id_users', $request->id_user)->get();
        if($info == '[]'){
            return response()->json(0);
        }
        else{
            return response()->json($info);
        }
    }
}