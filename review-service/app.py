from flask import Flask, jsonify
import requests


# Membuat instance Flask
app = Flask(__name__)

# Data dummy untuk review produk
product_reviews = [
    {
        "id": 1,
        "product_id": 1,
        "review": "Great product"
    },
    {
        "id": 2,
        "product_id": 1,
        "review": "Pretty good"
    },
    {
        "id": 3,
        "product_id": 1,
        "review": "Pretty bad"
    },
    {
        "id": 4,
        "product_id": 2,
        "review": "Good product"
    },
]

# Endpoint untuk mendapatkan semua review
@app.route('/reviews', methods=['GET'])
def get_reviews():
    return jsonify({
                    "success":True,
                    "message":"Success",
                    "data":product_reviews})

# Endpoint untuk mendapatkan review berdasarkan ID produk
@app.route('/products/reviews/<int:product_id>', methods=['GET'])
def get_product_reviews(product_id):
    # Menyaring review berdasarkan product_id
    filtered_reviews = [review for review in product_reviews if review['product_id'] == product_id]
    
    # Mengembalikan review jika ada, atau mengembalikan pesan error jika tidak ditemukan
    if filtered_reviews:
        return jsonify({"success":True,
                    "message":"Success",
                    "data":product_reviews})
    else:
        return jsonify({
            "success": False,
            "message": "Product not found",
        }), 404

# Menjalankan aplikasi Flask pada port 3003
if __name__ == '__main__':
    app.run(debug=True, port=3002, host="0.0.0.0")