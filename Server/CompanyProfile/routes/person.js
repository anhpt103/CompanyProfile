const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router.get('/', async (req, res) => {
    try {
        const dataPerson = await Person.find();
        res.json(dataPerson);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:personId', async (req, res) => {
    try {
        const dataPerson = await Person.findById(req.params.personId);
        res.json(dataPerson);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const data = new Person({
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        BirthDate: req.body.birthDate,
        GenderCode: req.body.genderCode,
        PhoneNumber: req.body.phoneNumber
    });

    try {
        const savePerson = await data.save();
        res.json(savePerson);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:personId', async (req, res) => {
    try {
        const deletePerson = await Person.remove({ _id: req.params.personId });
        res.json(deletePerson);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
