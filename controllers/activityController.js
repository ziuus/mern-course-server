const {Activity} = require('../models/activity');


const createActivity = async (req, res) => {
  Activity.create({
    activity_id: req.body.activity_id,
    todo_description: req.body.todo_description
  })
    .then((data) => {
      res.status(200).send("New Activity created");
    })
    .catch((err) => {
      res.send(err)
    })
};

const getActivity = async (req, res) => {
  Activity.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err)
    })
}

const deleteActivity = async (req, res) => {
  Activity.deleteOne({activity_id: req.body.activity_id})
    .then((data) => {
      res.status(200).send("Activity deleted");
    })
    .catch((err) => {
      res.send(err)
    })
}
module.exports = { createActivity, getActivity, deleteActivity };