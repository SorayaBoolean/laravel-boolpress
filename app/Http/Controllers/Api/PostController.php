<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post=Post::with(['category'])->paginate(3);


        return response()->json([
            'success'=> true,
            'results'=> $post
        ]);
    }

    public function show ($slug)
    {
       $post = Post::where ('slug', $slug)->with(['category'])->firtsOrFail();


            if ($post->cover){
                $post->cover=asset('./storage' . $post->cover);
            }else{
                $post->cover=asset('img/no_cover.jpg');
            };

        return response ()->json ([
            'success' => 'true',
            'result' => $post
        ]);
       }
    }




    