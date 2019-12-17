<?php

namespace App\Console\Commands;

use App\Cargos;
use Carbon\Carbon;
use CS_REST_Campaigns;
use Illuminate\Console\Command;
use PhpParser\Node\Expr\PostDec;

class SendEmail extends Command
{
    protected $signature = 'ln:daily';
    protected $description = 'Send email';

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
        $posts = Post::active()->where('publishes_at', '>', Carbon::parse('yesterday 3pm'))->get();
        if (count($posts) > 0) {
            return $this->email($posts);
        }
    }

    protected function email($posts)
{
    $auth = ['api_key' => config('services.campaign-monitor.key')];
    $cm = new CS_REST_Campaigns(null, $auth);

    $draft = $cm->create(config('services.campaign-monitor.client_id'), [
        'Subject' => $posts->first()->title,
        'Name' => 'Daily Email ('.date("Y-m-d").')',
        'FromName' => 'Laravel News',
        'FromEmail' => 'hello@example.com',
        'ReplyTo' => 'hello@example.com',
        'HtmlUrl' => 'https://site.com/dailyTemplate',
        'ListIDs' => [config('services.campaign-monitor.daily_id')],
    ]);

    $cm->set_campaign_id($draft->response);

    $result = $cm->send(array(
        'ConfirmationEmail' => 'hello@example.com',
        'SendDate' => 'immediately'
    ));
}
}
