<?php

namespace App\Http\Controllers\frontend\auth;

use App\Http\Controllers\Controller;
use App\User;
use App\UserSocial;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\InvalidStateException;
use Tymon\JWTAuth\JWTAuth;

class SocialLoginController extends Controller
{
    protected $auth;

    public function __construct(JWTAuth $auth)
    {
        $this->auth = $auth;
        $this->middleware('social');
    }

    public function redirect($service)
    {
        return Socialite::driver($service)->stateless()->redirect();
    }

    public function callback($service)
    {
        if (!request()->has('error')) {
            try {
                $serviceUser = Socialite::driver($service)->stateless()->user();
            } catch (InvalidStateException $e) {
                return redirect('https://garjoonepal.com' . '/social-callback?error=Unable to login using ' . $service . ' Please try again.' . '&origin=login');
            }

            $email = $serviceUser->getEmail();
            if ($service != 'google') {
                $email = $serviceUser->getId() . '@' . $service . '.local';
            }

            $user = $this->getExistingUser($serviceUser, $email, $service);
            $newUser = false;
            if (!$user) {
                $newUser = true;
                $user = User::create([
                    'name' => $serviceUser->getName(),
                    'email' => $email,
                    'password' => '',
                    'status' => true
                ]);
            }

            if ($this->needToCreateUserSocial($user, $service)) {
                UserSocial::create([
                    'user_id' => $user->id,
                    'social_id' => $serviceUser->getId(),
                    'service' => $service
                ]);
            }

            return redirect('https://garjoonepal.com' . '/social-callback?token=' . $this->auth->fromUser($user) . '&origin=' . ($newUser ? 'register' : 'login'));
        } else {
            return redirect('https://garjoonepal.com' . '/login');
        }
    }

    public function needToCreateUserSocial(User $user, $service)
    {
        return !$user->hasSocialLinked($service);
    }

    public function getExistingUser($serviceUser, $email, $service)
    {
        if ($service == 'google') {
            return User::where('email', $email)
                ->orWhereHas('social', function ($query) use ($serviceUser, $service) {
                    $query->where('social_id', $serviceUser->getId())->where('service', $service);
                })->first();
        } else {
            $userSocial = UserSocial::where('social_id', $serviceUser->getId())->first();

            return $userSocial ? $userSocial->user : null;
        }
    }
}
