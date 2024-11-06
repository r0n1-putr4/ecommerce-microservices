<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;

use function Laravel\Prompts\error;

class CartController extends Controller
{
    private $cartList = [
        [
            'id' => 1,
            'name' => 'Produk 1',
            'quantity' => 10,
            'price' => 1000
        ],
        [
            'id' => 2,
            'name' => 'Produk 2',
            'quantity' => 1,
            'price' => 2000
        ],
    ];

    public function index()
    {
        try {
            //code...
            return response()->json($this->cartList);
        } catch (\Throwable $th) {
            //throw $th;
            Log::error([
                'message' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine()
            ]);
            return response()->json(
                [
                    'message' => $th->getMessage(),
                ]
            );
        }
    }

    public function show($id){
        try {
            //code...
            $productCart = array_reduce($this->cartList, function ($total, $item) use ($id) {
                if ($item['id'] == $id) {
                    $total += $item['quantity'];
                }
                return $total;
            },0);
            return response()->json([
                'id'=> $id,
                'quantity' => $productCart
            ]);
        } catch (\Throwable $th) {
            Log::error([
                'message' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine()
            ]);
            return response()->json(
                [
                    'message' => $th->getMessage(),
                ]
            );
        }
    }
}