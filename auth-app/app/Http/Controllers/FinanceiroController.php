<?php

namespace App\Http\Controllers;
use App\Financeiro;
use Carbon\Carbon;
use Illuminate\Http\Request;

class FinanceiroController extends Controller
{
    public function mes($meses){
        switch($meses){
            case 1:
                $mes = "Janeiro";
                return $mes;
                break;
            case 2:
                $mes = "Fevereiro";
                return $mes;
                break;
            case 3:
                $mes = "Março";
                return $mes;
                break;
            case 4:
                $mes = "Abril";
                return $mes;
                break;
            case 5:
                $mes = "Maio";
                return $mes;
                break;
            case 6:
                $mes = "Junho";
                return $mes;
                break;
            case 7:
                $mes = "Julho";
                return $mes;
                break;
            case 8:
                $mes = "Agosto";
                return $mes;
                break;
            case 9:
                $mes = "Setembro";
                return $mes;
                break;
            case 10:
                $mes = "Outubro";
                return $mes;
                break;
            case 11:
                $mes = "Novembro";
                return $mes;
                break;
            case 12:
                $mes = "Dezembro";
                return $mes;
                break;
        }
    }
    public function financeiro(Request $request){
        $request->validate([
            'valor'=>'required|string',
            'mes' => 'required|int'
        ]);
        $mes = $this->mes($request->mes);
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

    public function getfinanceiro(Request $request){
        $request->validate([
            'id_user'=>'required|int'
        ]);
        $atual = date('m');
        $mes = $this->mes($atual);
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
        $mes = $this->mes($atual);
        $info=Financeiro::where('mes', $mes )->get();
        
        return response()->json($info);
    }
}
