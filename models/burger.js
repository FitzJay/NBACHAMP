module.exports = function(sequelize, DataTypes) {
	var burgertoos = sequelize.define('burgertoos', {
		burger_name: { type: DataTypes.STRING },
                devoured: { type: DataTypes.BOOLEAN, defaultValue: false },
  createdAt: {
    type: DataTypes.DATE,
    field: 'date',
    defaultValue: sequelize.literal('NOW()')
  }
}, {
  timestamps: false,

});
//     var burgertoos = sequelize.define("burgertoos", {
//                 burger_name: { type: DataTypes.STRING },
//                 devoured: { type: DataTypes.BOOLEAN, defaultValue: false },
//                 createdAt:{defaultValue: sequelize.literal('NOW()')}

//         },
//         { timestamps: true }
// );
burgertoos.sync();
return burgertoos;
};


// {timestamps: true, createdAt: false, updatedAt: 'date'}