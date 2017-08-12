module.exports = function(sequelize, DataTypes) {
    var player = sequelize.define('players', {
        player_id: { type: DataTypes.STRING },
        status: { type: DataTypes.STRING },
        player_name: { type: DataTypes.STRING },
        position: { type: DataTypes.STRING },
        primary_position: { type: DataTypes.STRING },
        experience: { type: DataTypes.STRING },
        team: { type: DataTypes.STRING },
        seasons: { type: DataTypes.TEXT },
        // createdAt: {
        //     type: DataTypes.DATE,
        //     field: 'date',
        //     defaultValue: sequelize.literal('NOW()')
        // }
    }, {
        timestamps: false,
    });
    player.sync();
    return player;







};