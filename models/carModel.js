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
    
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: brandModel,
          key: 'id'
        }},
    
      year: {
        type: DataTypes.DATE,
        allowNull: false
      },

      category: {
        type: DataTypes.STRING,
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