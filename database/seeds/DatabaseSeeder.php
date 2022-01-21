<?php

use Illuminate\Database\Seeder;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        echo PHP_EOL , 'cleaning old data....';


        //User::truncate();

        echo PHP_EOL, 'seeding users...';

        User::create(
            [
                'name' => 'Pradeep Gurung',
                'email' => 'admin@gmail.com',
                'type'=>'admin',
                'password' => bcrypt('password'),
                'phone'=>'98121212',
                'address'=>'kathmandu',
                'remember_token' => null,
            ]
        );

        User::create(
            [
                'name' => 'Manish Maharjan',
                'email' => 'user@gmail.com',
                'password' => bcrypt('password'),
                'phone'=>'98121212',
                'address'=>'kathmandu',
                'remember_token' => null,
            ]
        );

        echo PHP_EOL, 'Users seeded';
        $this->call([
            LocationTableSeeder::class,
        ]);

    }
}
