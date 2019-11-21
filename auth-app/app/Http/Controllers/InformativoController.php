<?php

namespace App\Http\Controllers;
use App\Info;
use Illuminate\Http\Request;

class InformativoController extends Controller
{
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
}
