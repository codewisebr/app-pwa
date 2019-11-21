<?php

namespace App\Http\Controllers;

use App\Reuniao;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReuniaoController extends Controller
{
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
}
