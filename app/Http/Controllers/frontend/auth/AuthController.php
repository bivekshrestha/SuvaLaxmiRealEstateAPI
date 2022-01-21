<?php

namespace App\Http\Controllers\frontend\auth;

use App\User;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\JWTAuth;

class AuthController extends Controller
{

    protected $auth;

    /**
     * AuthController constructor.
     * @param JWTAuth $auth
     */
    public function __construct(JWTAuth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        if ($request->input('token')) {
            $this->auth->setToken($request->input('token'));
            $user = $this->auth->authenticate();
            if ($user) {
                $user = $request->user();
                if ($user->status) {
                    return response()->json([
                        'success' => true,
                        'data' => $request->user(),
                        'token' => $request->input('token')
                    ], 200);
                } else {
                    return response()->json([
                        'success' => false,
                        'errors' => [
                            'invalid' => 'Your account has been on hold. Please, contact us to activate your account.'
                        ]
                    ], 422);
                }
            }
        }

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:6'
        ])->validate();

        $user = User::where('email', $request->email)->first();

        if ($user) {
            if (!$user->active) {
                return response()->json([
                    'success' => false,
                    'errors' => [
                        'invalid' => 'Your account has not been activated yet. Please, check your email to activate your account.'
                    ]
                ], 422);
            }

            try {
                if (!$token = $this->auth->attempt($request->only('email', 'password'))) {
                    return response()->json([
                        'success' => false,
                        'errors' => [
                            'invalid' => 'Invalid email address or password'
                        ]
                    ], 422);
                }
            } catch (JWTException $e) {
                return response()->json([
                    'success' => false,
                    'errors' => [
                        'invalid' => 'Invalid email address or password'
                    ]
                ], 422);
            }

            return response()->json([
                'success' => true,
                'data' => $request->user(),
                'token' => $token
            ], 200);
        }

        return response()->json([
            'success' => false,
            'errors' => [
                'invalid' => 'Invalid email address or password'
            ]
        ], 422);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function user(Request $request): JsonResponse
    {
        return response()->json([
            'success' => true,
            'user' => $request->user()
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request): JsonResponse
    {
        $user = $request->user();
        $user->save();
        return response()->json([
            'success' => true
        ]);
    }
}
