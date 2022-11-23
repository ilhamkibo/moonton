<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Shawsank Redemption',
                'slug' => 'the-shawsank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
                'rating' => 4.3,
                'is_featured' => 1
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=UaVTIH8mujA',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
                'rating' => 4.2,
                'is_featured' => 0
            ],
            [
                'name' => 'The Godfather: Part II',
                'slug' => 'the-godfather-part-ii',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=9O1Iy9od7-A',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
                'rating' => 4.0,
                'is_featured' => 0
            ]
        ];
        Movie::insert($movies);
    }
}
