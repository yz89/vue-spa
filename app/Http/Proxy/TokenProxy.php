<?php

namespace App\Http\Proxy;

class TokenProxy
{

    protected $http;

    public function __construct(\GuzzleHttp\Client $http)
    {
        $this->http = $http;
    }

    public function login($email, $password)
    {
        if (auth()->attempt(['email' => $email, 'password' => $password, 'is_active' => 1])) {
            return $this->proxy('password', [
                'username' => $email,
                'password' => $password,
                'scope' => ''
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'Credentials not match'
        ], 421);
    }

    public function refreshToken()
    {
        $refreshToken = request()->cookie('refreshToken');

        return $this->proxy('refresh_token', [
            'refresh_token' => $refreshToken
        ]);
    }

    public function proxy($grantType, array $data = [])
    {
        $data = array_merge($data, [
            'client_id' => env('PASSPORT_CLIENT_ID'),
            'client_secret' => env('PASSPORT_CLIENT_SECRET'),
            'grant_type' => $grantType
        ]);

        $response = $this->http->post('http://vue-spa.test/oauth/token', [
            'form_params' => $data
        ]);

        $token = json_decode((string)$response->getBody(), true);

        return response()->json([
            'token' => $token['access_token'],
            'auth_id' => md5($token['refresh_token']),
            'expires_in' => $token['expires_in']
        ])->cookie('refreshToken', $token['refresh_token'], 14400, null, null, false, true);

    }

}