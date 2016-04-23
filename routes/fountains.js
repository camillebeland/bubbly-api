var fountains = [];
var fountains = require('./fontaines.json')

for (var key in fountains.FONTAINES) {
    if (fountains.hasOwnProperty(key)) {
        var item = json[key];
        fountains.push({
            description: item.DESCRIPTION,
            street_number: item.NO_CIVIQUE,
            street_name: item.RUE,
            city: item.ANC_VILLE
        });
    }
}

exports.getAllFountains = function (req, res) {
    res.json({ fountains: fountains });
};

exports.createFountain = function (req, res) {
    if (req.body.fountain === undefined) {
        res.send(400);
    }
    fountains.push(req.body);
    res.send(201);
};

exports.deleteFountains = function (req, res) {
        fountains.splice(0, tasks.length);
        res.send(200);
};
