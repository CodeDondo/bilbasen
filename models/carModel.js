import dbConfig from '../config/dbConfig.js';
import { DataTypes, Model } from 'sequelize';

export class carModel extends Model {}
carModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    
      brand: {
        type: DataTypes.STRING,
        allowNull: false
      },
    
      year: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
        sequelize: dbConfig,
        modelName: 'car', // Modellens navn
        underscored: true, // True: car_brands || False: carBrands
        freezeTableName: true, // True: car || False: cars
        createdAt: true, // Tilføjer createdAt felt
        updatedAt: true, // Tilføjer updatedAt felt
      });