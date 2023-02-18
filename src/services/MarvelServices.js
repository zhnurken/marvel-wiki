class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=750fef3b760aa88f12924436da87f4bd';
    getResource = async (url) => {
        const res = await fetch(url);
    
        if (!res.ok) {
            throw new Error('Could not fetch ${url}, status: ${res.status}');
        }
         
        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=543&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;