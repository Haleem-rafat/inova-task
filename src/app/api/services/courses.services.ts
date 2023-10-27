import { envConfig } from '@app/config';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { EAPI } from '@constants/endpoints';
import { IcoursesList } from '@servicesTypes/courses.types';

class CoursesService {
  private _guestAxios = axios.create({
    baseURL: envConfig.base_url,
  });
  private _decodeToken(token: string): any | null {
    try {
      const decoded = jwt_decode<any>(token);
      return decoded;
    } catch (e) {
      return null;
    }
  }

  public async coursesList(type): Promise<IcoursesList> {
    const api = `${EAPI.COURSES}?filter[taxons]: ${type}`;
    const { data } = await this._guestAxios.get(api);
    return data;
  }

  public async overView(id): Promise<IcoursesList> {
    const api = `${EAPI.COURSES}/${id}`;
    const { data } = await this._guestAxios.get(api);
    return data;
  }
}
export default Object.freeze(new CoursesService());
