from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/query', methods=['POST'])
def send_response():
    try:
        query = request.json.get('query')
        # Your logic to process the query and generate response goes here
        # For now, let's just echo back the received query
        data = {
            'message': f'Received query: {query}'
        }
        return jsonify(data)
    except Exception as e:
        error_message = f"Error processing query: {str(e)}"
        return jsonify({'error': error_message}), 500

if __name__ == '__main__':
    app.run(debug=True)
