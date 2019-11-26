@component('mail::message')

    Seja Bem-Vindo! 
    Muito obrigado por se cadastrar.
    Clique no botão para entrar
    @component('mail::button', ['url' => $link])
    Entrar
    @endcomponent
    Atenciosamente,  
    Equipe CodeWise.
@endcomponent