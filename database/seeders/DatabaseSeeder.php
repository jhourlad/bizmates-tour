<?php

namespace Database\Seeders;

use App\Models\Venue;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Constructor
     *
     * @param Venue $venue
     */
    public function __construct(protected Venue $venue, protected $data = [])
    {
        // Available venues
        $this->data = [
            ['name' => 'Tokyo'],
            ['name' => 'Yokohama'],
            ['name' => 'Kyoto'],
            ['name' => 'Osaka'],
            ['name' => 'Sapporo'],
            ['name' => 'Nagoya'],
        ];
    }

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->venue->insert($this->data);
    }
}
