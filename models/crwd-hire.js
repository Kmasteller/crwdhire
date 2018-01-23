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

      jobCategory: {
        type: DataTypes.INTEGER,
        allowNull: false
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

    jobImage2: {
          type: DataTypes.STRING,
          allowNull: true
       },

    jobImage: {
          type: DataTypes.STRING,
          allowNull: true
      },

      jobURL: {
          type: DataTypes.STRING,
          allowNull: true
      },

      jobTime: {
          type: DataTypes.INTEGER,
          allowNull: false
        },

        jobInputAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false
        },

        // jobFullTime: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     defaultValue: true
        // },

        // jobUnknownTime: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     defaultValue: false
        // },

        jobTagCity: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false
        },

        jobTagCounty: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false
        },

        jobTagState: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false
        },

        jobTagAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false
        },



        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,

    });
    return Job;
  };