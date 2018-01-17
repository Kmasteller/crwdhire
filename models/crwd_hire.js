module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("jobs", {
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false
      },

      jobLocation: {
        type: DataTypes.STRING,
        allowNull: false
      },

      jobDescription: {
        type: DataTypes.TEXT,
        allowNull: true
      },

      jobCompany: {
          type: DataTypes.STRING,
          allowNull: false
      },
      
      jobPay: {
          type: DataTypes.INTEGER,
          allowNull: true
      },

      jobPhone: {
          type: DataTypes.STRING,
          allowNull: true
      },

      jobContact: {
          type: DataTypes.STRING,
          allowNull: true
      },

      jobURL: {
          type: DataTypes.STRING,
          allowNull: true
      },

      jobPartTime: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false
      },

        jobFullTime: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },

        jobUnknownTime: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }

    });
    return Job;
  };