import { carModel } from './carModel.js';
import { brandModel } from '../models/brandModel.js';

export const setRelations = () => {
    carModel.belongsTo(brandModel);

    brandModel.hasMany(carModel);
}