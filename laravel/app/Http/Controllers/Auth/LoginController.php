<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    public function redirectToProvider(): \Symfony\Component\HttpFoundation\RedirectResponse|\Illuminate\Http\RedirectResponse
    {
        return Socialite::driver('azure')->redirect();
    }
    public function handleProviderCallback(): \Illuminate\Routing\Redirector|\Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse
    {
        $azureUser = Socialite::driver('azure')->user();

        $user = User::where('email', $azureUser->getEmail())->first();

        if ($user) {
            $token = $user->createToken('auth_token');

            Auth::login($user, true);

        } else {
            $newUser = User::create([
                'name' => $azureUser->getName(),
                'email' => $azureUser->getEmail()
            ]);
            $token = $user->createToken('auth_token');

            Auth::login($newUser, true);
        }

        return redirect("http://localhost:3000?b=" . $token->plainTextToken);
    }
}
