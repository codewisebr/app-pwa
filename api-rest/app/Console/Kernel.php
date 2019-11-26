<?php

namespace App\Console;

use App\Cargos;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Psy\TabCompletion\Matcher\CommandsMatcher;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //Commands\Inspire::class,
        Commands\CriaReuniao::class,
        
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        //$schedule->command('inspire')->hourly();


        //para testar se esta funcionando php artisan CriaReuniao:cron
        $schedule->command('criareuniao:cron')
        ->timezone('America/Sao_Paulo')
        ->tuesdays()
        ->at('06:00');
        //tarefa para fazer toda as terças feiras de manha = criar nova reuniao e excluir a antiga
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
