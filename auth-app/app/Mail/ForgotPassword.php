<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
class ForgotPassword extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($senha)
    {
        return $this->from('natalia@brunolopes.com', 'CodeWise')
            ->subject('Redefinição da senha')
            ->markdown('mails.send')
            ->with([
                'senha'=>$senha
            ]);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        
    }
}
