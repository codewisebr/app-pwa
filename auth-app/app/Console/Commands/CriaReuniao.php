<?php

namespace App\Console\Commands;

use App\Cargos;
use Illuminate\Console\Command;

class CriaReuniao extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'criareuniao:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //transforma a data atual em apenas data
        $now = strtotime(Carbon::now());
        //adiciona 6 dias, pq ele realiza essa tarefa toda terca
        $string = "+6 day";
        //soma a qtde de dias
        $data = strtotime($string, $now);
        //configura o formato
        $resul = date('Y-m-d', $data);
        //cria a reuniao
        $reuniao = new Reuniao;
        $reuniao->data = $data;
        $reuniao->ativo=1;
        $reuniao->save();
        return response()->json([
            'message' => 'Reuniao criada!'
        ], 201);
        
        //pega a data do dia anterior
        $aux = strtotime("-1 day", Carbon::now());
        $antiga= date('Y-m-d', $aux);
        Reuniao::where('data',$antiga)->update(['ativo'=> 0]);
    }
}
