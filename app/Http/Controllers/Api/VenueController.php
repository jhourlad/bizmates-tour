<?php

/**
 * VenueController
 */

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Venue;
use Illuminate\Support\Collection;

/**
 * VenueController
 *
 * Handles API requests for cities
 *
 */
class VenueController extends Controller
{
    /**
     * Get available cities
     *
     * @return Collection
     */
    public function index(): Collection
    {
        return Venue::all();
    }

    /**
     * Get information about a city
     *
     * @param Venue $venue
     * @return Venue
     */
    public function show(Venue $venue): Venue
    {
        return $venue;
    }
}
