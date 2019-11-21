<?php

namespace App\Http\Controllers;

use App\Ordem;
use Illuminate\Http\Request;

class OrdemController extends Controller
{
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
}
