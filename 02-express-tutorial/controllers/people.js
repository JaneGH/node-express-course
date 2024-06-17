const { people } = require('../data.js');

const getPeople = (req, res) => {
    res.json(people);
};

const getPersonById = (req, res) => {
    const { id } = req.params;
    const person = people.find(p => p.id === parseInt(id));
    if (person) {
        res.json(person);
    } else {
        res.status(404).json({ message: "Person not found" });
    }
};

const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: 'Please provide a name' });
    }
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    res.status(201).json({ success: true, name });
};

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find(p => p.id === parseInt(id));
    if (!person) {
        return res.status(404).json({ message: "Person not found" });
    }
    person.name = name;
    res.json({ success: true, person });
};

const deletePerson = (req, res) => {
    const { id } = req.params;
    const index = people.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: "Person not found" });
    }
    people.splice(index, 1);
    res.json({ success: true, message: "Person removed" });
};

module.exports = { getPeople, getPersonById, addPerson, updatePerson, deletePerson };
