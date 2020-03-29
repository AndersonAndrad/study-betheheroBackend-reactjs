// dependencies 

// Database connection
import connection from '../../database/connection';

class ProfileController {
  async index (request, response){
    const ong_id = request.headers.auth;

    const incidents = await connection('incidents')
    .where('ong_id', ong_id)
    .select('*');

    return response.status(200).json(incidents);
  }
}

export default new ProfileController();