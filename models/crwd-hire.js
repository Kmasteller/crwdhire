module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false
      },

      jobLocation: {
        type: DataTypes.STRING,
        allowNull: true
      },

      jobLocation: {
        type: DataTypes.STRING,
        allowNull: true
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
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: false
      },

        jobFullTime: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: true
        },

        jobUnknownTime: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,

    });
    return Job;
  };